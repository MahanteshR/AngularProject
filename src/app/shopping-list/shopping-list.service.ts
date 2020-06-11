import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  shoppingListChanged = new EventEmitter<IngredientModel[]>();

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
    this.shoppingListChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.emit(this.ingredients.slice());
  }
}
