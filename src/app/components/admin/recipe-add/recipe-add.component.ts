import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.less']
})
export class RecipeAddComponent implements OnInit {

  public addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.recipeService.create(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['admin', 'recipe']);
      });
  }
}
