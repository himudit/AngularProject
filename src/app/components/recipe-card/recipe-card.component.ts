import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Recipe } from '../../services/cart.service';
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

  @Input() recipe!: Recipe;
  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addRecipe(this.strMeal, this.strMealThumb, this.strInstructions);
  }
}
