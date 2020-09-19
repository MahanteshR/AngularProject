import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as shoppingListActions from '../store/shopping-list.action';
import * as fromApp from '../../store/app.reducer';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscribe: Subscription;
  editMode = false;
  editIngredient: IngredientModel;

constructor(private shoppingListService: ShoppingListService, private store: Store<fromApp.AppState> ) { }

  ngOnInit() {
    this.subscribe = this.store.select('shoppingList').subscribe(stateData => {
    if (stateData.editedIngredientIndex > -1) {
      this.editMode = true;
      this.editIngredient = stateData.editedIngredient;
      this.slForm.setValue({
        name: this.editIngredient.name,
        amount: this.editIngredient.amount
      });
    } else {
      this.editMode = false;
    }
  });
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newIng = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIng);
      this.store.dispatch(new shoppingListActions.UpdateIngredients(newIng));
    } else {
      // this.shoppingListService.addIngredient(newIng);
      this.store.dispatch(new shoppingListActions.AddIngredient(newIng));
    }
    this.editMode = false;
    f.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new shoppingListActions.DeleteIngredients());
    this.onClear();
  }

  ngOnDestroy(): void {
  this.subscribe.unsubscribe();
  this.store.dispatch(new shoppingListActions.StopEdit());
  }

}
