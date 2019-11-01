import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', loadChildren:  './components/main/main.module#MainModule' },
  { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule' },
  { path: 'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule' },
  { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
