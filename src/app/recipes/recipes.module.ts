import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';

export const routes: Routes = [
  { path: '', component: RecipesComponent }
];

@NgModule({
  declarations: [
    RecipesComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecipesModule { }