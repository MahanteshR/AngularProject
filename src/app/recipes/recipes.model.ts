import {IngredientModel} from '../shared/ingredient.model';

export class RecipesModel {
  public name: string;
  public desc: string;
  public imgpath: string;
  public ingredients: IngredientModel[];

  constructor(name: string, desc: string, imgpath: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.desc = desc;
    this.imgpath = imgpath;
    this.ingredients = ingredients;
  }
}

