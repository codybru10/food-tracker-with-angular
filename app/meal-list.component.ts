import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of mealList" class="well">
    <h5> {{currentMeal.name}}</h5>
    <h5>{{currentMeal.detail}}</h5>
    <h5>{{currentMeal.calories}}</h5>
  </div>
  `
})

export class MealListComponent {
  @Input() mealList: Meal[];



}
