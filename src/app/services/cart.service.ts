import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Recipe {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Recipe[] = [];
  private cartSubject = new BehaviorSubject<Recipe[]>([]);
  constructor() { }
  addRecipe(strMeal: string, strMealThumb: string, strInstructions: string): void {
    const newRecipe: Recipe = {
      strMeal,
      strMealThumb,
      strInstructions
    };
    this.cart.push(newRecipe);
    this.cartSubject.next(this.cart); // notify subscribers
  }
  getCart() {
    return this.cartSubject.asObservable();
  }
  getCartCount() {
    return this.cart.length;
  }
}
