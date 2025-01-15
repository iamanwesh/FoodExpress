import { Injectable } from '@angular/core';
import { cart } from '../../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = this.getcartlocal();
  private cartsubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartitem = this.cart.items
      .find(item => item.food.id === food.id)
    if (cartitem)
      return;

    this.cart.items.push(new CartItem(food));
    this.setcarttolocal()
  }
  removefromcart(foodid: number): void {
    this.cart.items = this.cart.items
      .filter(item => item.food.id != foodid);
      this.setcarttolocal()
  }
  changequantity(foodid: number, quantity: number) {
    let cartitem = this.cart.items.find(item => item.food.id === foodid);
    if (!cartitem)
      return;
    cartitem.quantity = quantity;
    cartitem.price = quantity * cartitem.food.price;
    this.setcarttolocal()
  }

  clearcart() {
    this.cart = new cart();
    this.setcarttolocal()
  }
  getcartobservable(): Observable<cart> {
    return this.cartsubject.asObservable();
  }

  private setcarttolocal(): void {
    this.cart.totalprice = this.cart.items.reduce((prevsum, currentitem) => prevsum + currentitem.price, 0)
    this.cart.totalcount = this.cart.items.reduce((prevsum, currentitem) => prevsum + currentitem.quantity, 0)
    const cartjson = JSON.stringify(this.cart);
    localStorage.setItem("cart", cartjson);
    this.cartsubject.next(this.cart)
  }
  private getcartlocal():cart{
    const cartjson=localStorage.getItem('cart');
    return cartjson? JSON.parse(cartjson):new cart();
  }
}
