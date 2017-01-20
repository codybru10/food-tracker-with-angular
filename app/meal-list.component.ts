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

  <div *ngFor="let currentMeal of mealList | calorieIntake:filterByCalories" class="well" class="row">
      <div class="col s12 m12">
        <div class="card-panel hoverable indigo lighten-5">
          <h5>Meal: {{currentMeal.name}}</h5>
          <h5>Details: {{currentMeal.details}}</h5>
          <h5>Calories: {{currentMeal.calories}}</h5>
          <button (click)="editMeal(currentMeal)" class='btn light-blue darken-2'>Edit</button>
        </div>
      </div>
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
