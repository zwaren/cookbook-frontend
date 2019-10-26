import { Component, OnInit } from '@angular/core';
import { RecipeStepService } from '../../../services/recipe-step/recipe-step.service';
import { RecipeStep } from '../../../models/recipe-step';

@Component({
  selector: 'app-recipe-step-list',
  templateUrl: './recipe-step-list.component.html',
  styleUrls: ['./recipe-step-list.component.less']
})
export class RecipeStepListComponent implements OnInit {

  recipeSteps: RecipeStep[];

  constructor(private recipeStepService: RecipeStepService) { }

  ngOnInit() {
    this.recipeStepService.getList()
      .subscribe(data => this.recipeSteps = data);
  }

}
