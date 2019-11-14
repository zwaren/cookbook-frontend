import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {
  private ws: WebSocket;
  recipes: Recipe[];
  searchQuery: string;
  queryChanged = new Subject<string>();

  constructor(private recipeService: RecipeService) {
    this.ws = new WebSocket('wss://cookback-ws.herokuapp.com/');
    this.recipes = [];
    this.ws.onopen = () => {
      this.ws.onmessage = (event) => {
        const model = JSON.parse(event.data);
        if (model.data) {
          const type = JSON.parse(model.data).type;
          if (type == "recipe") {
            console.log(JSON.parse(model.data).data);
            this.recipes.push(JSON.parse(model.data).data);
          }
        }
      }
    }
  }

  ngOnInit() {
    this.recipeService.getList()
      .subscribe(data => {
        this.recipes = data;
      });

    this.queryChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(q => this.recipeService.search(q).subscribe(val => this.recipes = val));
  }

  changed(query: string) {
    if (query.trim() === '') {
      this.recipeService.getList().subscribe(val => this.recipes = val);
      return;
    } 
    this.queryChanged.next(query);
  }
}
