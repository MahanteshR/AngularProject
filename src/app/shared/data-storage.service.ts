import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take, tap} from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import {RecipesModel} from '../recipes/recipes.model';
import {AuthService} from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://angular-recipebook-4f9b2.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
      return this.http
      .get<RecipesModel[]>(
        'https://angular-recipebook-4f9b2.firebaseio.com/recipes.json'
      ).pipe(map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }), tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }));
  }
}
