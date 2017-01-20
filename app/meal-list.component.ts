import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="browser-default">
    <option value="allFood" selected="selected">All Food</option>
    <option value="highCalorie">High Calorie Food</option>
    <option value="lowCalorie">Low Calorie Food</option>
  </select>
  <br>
  <div *ngFor="let currentMeal of mealList | calorieIntake:filterByCalories" class="well">
    <h5> {{currentMeal.name}}</h5>
    <h5>{{currentMeal.details}}</h5>
    <h5>{{currentMeal.calories}}</h5>
    <button (click)="editMeal(currentMeal)" class='btn'>Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() mealList: Meal[];
  @Output() sendEditMeal = new EventEmitter();

  editMeal(mealToEdit: Meal) {
    this.sendEditMeal.emit(mealToEdit);
  }

  filterByCalories: string = "allFood";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
