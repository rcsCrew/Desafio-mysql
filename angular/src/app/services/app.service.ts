import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, Ingredient } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Métodos para Ingredientes

  // Métodos para Receitas

  createRecipe(data: any): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/recipes`, data);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
  }

  // UPDATE NAO ESTA SENDO USADO
  updateRecipe(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/recipes/${id}`, data);
  }

  // Novos métodos adicionados
  // DELETAR TODOS AS RECEITAS 
  // FAZER
  deleteAllRecipes(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/recipes`);
  }
  // BUSCAR POR TITULO
  findByTitle(title: string): Observable<Recipe[]> {
    const params = new HttpParams().set('title', title);
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/search`, { params });
  }

  // BUSCAR INGREDIETES POR ID (NAO FUNCIONA)
  getRecipesByIngredient(ingredientId: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes/by-ingredient/${ingredientId}`);
  }

}
