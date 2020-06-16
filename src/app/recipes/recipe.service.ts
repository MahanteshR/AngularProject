import {RecipesModel} from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipesModel>();

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

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
