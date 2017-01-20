import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Angular Meal Tracker</h1>
    <h3>Date: {{month}}/{{date}}/{{year}}</h3>
    <hr>
    <new-meal (addMeal)=addMeal($event)></new-meal>
    <hr>
    <meal-list [mealList]="masterMealList"></meal-list>
  </div>
  `
})

export class AppComponent {
  currentDate = new Date();
  month = this.currentDate.getMonth() + 1;
  date = this.currentDate.getDate();
  year = this.currentDate.getFullYear();


  masterMealList: Meal[] = [
    new Meal('Chicken', 'baked chicken, extra extra greasy', 800),
    new Meal('Pasta', 'extra butter and cheese', 750),
    new Meal('Piece of Apple Pie', 'made with lard not butter', 500)
  ];

  addMeal(addedMeal: Meal){
    this.masterMealList.push(addedMeal);
  }

}
