import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {RecipesModel} from '../recipes/recipes.model';

@Injectable({ providedIn: 'root'})
export class DataStorageService {
  constructor(private  http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-recipebook-4f9b2.firebaseio.com/recipes.json', recipes).subscribe
      (response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<RecipesModel[]>('https://angular-recipebook-4f9b2.firebaseio.com/recipes.json')
      .subscribe(recipes => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
  }
}
