import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeStep } from '../recipe-step';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  recipes: Recipe[] = [
    {
      id: 0,
      name: "test",
      image: "https://memepedia.ru/wp-content/uploads/2017/11/8wFbGp0HQvI-1.jpg",
      description: "adskoe hryuchevo",
      ingredients: [],
      steps: []
    }, {
      id: 1,
      name: "test2",
      image: "https://memepedia.ru/wp-content/uploads/2017/11/8wFbGp0HQvI-1.jpg",
      description: "another adskoe hryuchevo",
      ingredients: [],
      steps: []
    }, {
      id: 2,
      name: "test3",
      image: "https://memepedia.ru/wp-content/uploads/2017/11/8wFbGp0HQvI-1.jpg",
      description: "yet another adskoe hryuchevo",
      ingredients: [],
      steps: []
    },
  ]

}
