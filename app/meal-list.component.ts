import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of mealList" class="well">
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
    console.log(mealToEdit);
    this.sendEditMeal.emit(mealToEdit);
  }
}
