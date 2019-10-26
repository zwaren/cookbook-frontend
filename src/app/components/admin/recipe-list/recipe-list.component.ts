import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getList()
      .subscribe(data => this.recipes = data);
  }
}
