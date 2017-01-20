import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorieIntake",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], calorieType) {
    var output: Meal[] = [];
    if(calorieType === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieType === "lowCalorie") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories <= 500) {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
