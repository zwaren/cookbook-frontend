import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';

export const routes: Routes = [
  { path: '', component: RecipesComponent }
];

@NgModule({
  declarations: [
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RecipesModule { }