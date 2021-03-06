import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'app-root',
  template: `
  <nav>
    <div class="nav-wrapper">
      <a href="localhost:3000" class="brand-logo">Meal Tracker</a>
    </div>
  </nav>
  <div class="container">
    <h3>Date: {{month}}/{{date}}/{{year}}</h3>
    <br>
    <new-meal (addMeal)=addMeal($event)></new-meal>
    <br>
    <meal-list [mealList]="masterMealList" (sendEditMeal)="editMeal($event)"></meal-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (done)="editDone()"></edit-meal>
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

  selectedMeal = null;

  addMeal(addedMeal: Meal){
    this.masterMealList.push(addedMeal);
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  editDone() {
    this.selectedMeal = null;
  }


}
