import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h3>Add Meal</h3>
  <div>
    <label>Enter Meal</label>
    <input #newName>
    <label>Enter Details</label>
    <input #newDetails>
    <label>Enter Calories</label>
    <input #newCalories>
    <button (click)="submitMeal(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';" class="btn">Add Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() addMeal = new EventEmitter();

  submitMeal(name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.addMeal.emit(newMeal);
  }


}
