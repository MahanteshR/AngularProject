import {Component, OnDestroy, OnInit} from '@angular/core';

import {RecipesModel} from './recipes.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
