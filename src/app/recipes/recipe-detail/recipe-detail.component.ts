import {Component, Input, OnInit} from '@angular/core';

import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipesModel;
  constructor() { }

  ngOnInit() {
  }

}
