import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from "rxjs";

export class ShoppingListService {

  shoppingListChanged = new Subject<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Murmure', 20),
    new IngredientModel('Tomatoes', 30),
    new IngredientModel('Onion', 10),
    new IngredientModel('Coriander', 5)
  ];

  getAddedIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.next(this.ingredients.slice());
  }
}
