import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal</h3>
      <label>Enter Meal</label>
      <input [(ngModel)]="childSelectedMeal.name">
      <label>Enter Details</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <label>Enter Calories</label>
      <input [(ngModel)]="childSelectedMeal.calories">
      <button class="btn">Save Changes</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
}
