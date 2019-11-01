import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard/auth-guard.service';
import { AdminComponent } from './admin.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeStepListComponent } from './recipe-step-list/recipe-step-list.component';
import { RecipeStepAddComponent } from './recipe-step-add/recipe-step-add.component';
import {ReactiveFormsModule} from '@angular/forms';

export const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'recipe', component: RecipeListComponent },
      { path: 'recipe-step', component: RecipeStepListComponent },
      { path: 'recipe/add', component: RecipeAddComponent },
      { path: 'recipe-step/add', component: RecipeStepAddComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    RecipeListComponent,
    RecipeAddComponent,
    RecipeStepListComponent,
    RecipeStepAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
