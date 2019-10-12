import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
