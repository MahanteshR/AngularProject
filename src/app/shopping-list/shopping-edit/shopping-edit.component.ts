import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscribe: Subscription;
  editMode = false;
  editedItemIndex: number;
  editIngredient: IngredientModel;

constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  this.subscribe = this.shoppingListService.startedEditing.
    subscribe(
    (index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editIngredient = this.shoppingListService.getEditIndex(index);
      this.slForm.setValue({
        name: this.editIngredient.name,
        amount: this.editIngredient.amount
      });
    }
  );
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newIng = new IngredientModel(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIng);
    } else {
      this.shoppingListService.addIngredient(newIng);
    }
    this.editMode = false;
    f.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
  this.subscribe.unsubscribe();
  }

}
