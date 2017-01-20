import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="card-panel">
      <h3>Edit Meal</h3>
      <input [(ngModel)]="childSelectedMeal.name">
      <label>Enter Meal</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <label>Enter Details</label>
      <input [(ngModel)]="childSelectedMeal.calories">
      <label>Enter Calories</label>
      <br>
      <br>
      <button (click)="editDone()" class="btn light-blue darken-2">Save Changes</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() done = new EventEmitter();

  editDone() {
    this.done.emit();
  }

}
