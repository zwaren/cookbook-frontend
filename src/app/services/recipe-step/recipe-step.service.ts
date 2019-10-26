import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeStep } from '../../models/recipe-step';

@Injectable({
  providedIn: 'root'
})
export class RecipeStepService {

  private apiUrl = `${environment.apiUrl}/recipe_steps`;

  constructor(private http: HttpClient) { }

  getList(): Observable<RecipeStep[]> {
    return this.http.get<RecipeStep[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<RecipeStep> {
    return this.http.get<RecipeStep>(`${this.apiUrl}/${id}`);
  }

  create(recipeStep: RecipeStep): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}`, recipeStep);
  }
}
