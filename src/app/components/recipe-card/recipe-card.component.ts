import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  black = "black";
  @Input() idMeal!: string;
  @Input() strMeal!: string;
  @Input() strMealThumb!: string;
  @Input() strInstructions!: string;
}
