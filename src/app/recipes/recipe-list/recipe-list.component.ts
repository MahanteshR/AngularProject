import { Component, OnInit } from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[] = [
    new RecipesModel('Uggani', 'YUMYUM',
      'https://yummyindiankitchen.com/wp-content/uploads/2015/05/Uggani-or-puffed-rice-recipe-puffed-rice-upma.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
