import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart.class';
import { Food } from '../shared/models/food.class';
import { CartItem } from '../shared/models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();


  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id); // Items shouldn't be duplicated.
    if (cartItem) { // Check if food item already in cart.
      this.changeQuantity(food.id, cartItem.quantity + 1);

      return;
    }
    this.cart.items.push(new CartItem(food));
  }


  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }


  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }


  getCart(): Cart {
    return this.cart;
  }

}
