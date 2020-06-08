import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() RecipeWasSelected = new EventEmitter<RecipesModel>();
  recipes: RecipesModel[] = [
    new RecipesModel('Uggani', 'YUMYUM',
      'https://yummyindiankitchen.com/wp-content/uploads/2015/05/Uggani-or-puffed-rice-recipe-puffed-rice-upma.jpg'),
    new RecipesModel('Paddu', 'Favourite',
      // tslint:disable-next-line:max-line-length
      'https://i0.wp.com/www.palatesdesire.com/wp-content/uploads/2015/12/instant_rava_paddu@palates_desire.jpg?zoom=2&resize=1170%2C840&ssl=1')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipesModel) {
    this.RecipeWasSelected.emit(recipe);
  }
}
