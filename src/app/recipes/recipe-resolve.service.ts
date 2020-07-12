import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipesModel} from './recipes.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RecipeService} from './recipe.service';

@Injectable({providedIn: 'root'})
export class RecipeResolveService implements Resolve<RecipesModel> {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
