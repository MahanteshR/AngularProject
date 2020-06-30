import {RecipesModel} from './recipes.model';
import { Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';



@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipesModel[]>();

  private recipes: RecipesModel[] = [
    new RecipesModel(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new IngredientModel('Meat', 1), new IngredientModel('French Fries', 20)]
    ),
    new RecipesModel(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new IngredientModel('Buns', 2), new IngredientModel('Meat', 1)]
    )
  ];
  // private recipes: RecipesModel[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: RecipesModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipes(recipe: RecipesModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipes(index: number, newRecipe: RecipesModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  recipeDelete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
//
// @Injectable()
// export class RecipeService {
//    recipeChanged = new Subject<RecipesModel[]>();
//
//     private recipes: RecipesModel[] = [
//     new RecipesModel('Uggani', 'YUMYUM',
//       'https://yummyindiankitchen.com/wp-content/uploads/2015/05/Uggani-or-puffed-rice-recipe-puffed-rice-upma.jpg',
//       [new IngredientModel('French Fries', 20),
//                   new IngredientModel('Burger', 5)]),
//
//     new RecipesModel('Paddu', 'Favourite',
//       // tslint:disable-next-line:max-line-length
//       'https://i0.wp.com/www.palatesdesire.com/wp-content/uploads/2015/12/instant_rava_paddu@palates_desire.jpg?zoom=2&resize=1170%2C840&ssl=1',
//       [new IngredientModel('Pizza', 7),
//                   new IngredientModel('Coco Cola', 10)])
//   ];
//
//    // private recipes: RecipesModel[] = [];
//
//     constructor(private shoppingListService: ShoppingListService) {
//   }
//
//   setRecipes(recipesFetch: RecipesModel[]) {
//       this.recipes = recipesFetch;
//       this.recipeChanged.next(this.recipes.slice());
//   }
//
//   getRecipes() {
//     return this.recipes.slice();
//   }
//
//   getRecipe(id: number) {
//     return this.recipes[id];
//   }
//
//
//   addIngredientsToShoppingList(ingredients: IngredientModel[]) {
//     this.shoppingListService.addIngredients(ingredients);
//   }
//
//
//
// }
