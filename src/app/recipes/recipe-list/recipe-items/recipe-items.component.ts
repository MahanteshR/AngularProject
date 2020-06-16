import {Component, Input, OnInit} from '@angular/core';

import {RecipesModel} from '../../recipes.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: RecipesModel;
  @Input() index: number;
  ngOnInit() {
  }

}
