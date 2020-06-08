import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {RecipesModel} from '../../recipes.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: RecipesModel;
  constructor() { }

  ngOnInit() {
  }

  RecipeSelected() {
    this.recipeSelected.emit();
  }
}
