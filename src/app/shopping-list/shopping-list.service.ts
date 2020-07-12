import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  startedEditing = new Subject<number>();
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

  getEditIndex(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.shoppingListChanged.next(this.ingredients.slice());
  }
}
