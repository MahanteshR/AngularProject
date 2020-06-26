import {RecipesModel} from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
   recipeChanged = new Subject<RecipesModel[]>();

  private recipes: RecipesModel[] = [
  new RecipesModel('Uggani', 'YUMYUM',
    'https://yummyindiankitchen.com/wp-content/uploads/2015/05/Uggani-or-puffed-rice-recipe-puffed-rice-upma.jpg',
    [new IngredientModel('French Fries', 20),
                new IngredientModel('Burger', 5)]),

  new RecipesModel('Paddu', 'Favourite',
    // tslint:disable-next-line:max-line-length
    'https://i0.wp.com/www.palatesdesire.com/wp-content/uploads/2015/12/instant_rava_paddu@palates_desire.jpg?zoom=2&resize=1170%2C840&ssl=1',
    [new IngredientModel('Pizza', 7),
                new IngredientModel('Coco Cola', 10)])
];

  // private recipes: RecipesModel[] = [];

    constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: RecipesModel[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }


  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipes(newRecipe: RecipesModel) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipes(index: number, newRecipe: RecipesModel) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  recipeDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
