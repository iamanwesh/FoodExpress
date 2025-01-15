import { Component } from '@angular/core';
import { cart } from '../../../../shared/models/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: cart;
  constructor(private cartservice: CartService) {
    this.cartservice.getcartobservable().subscribe((cart) => {
      this.cart = cart;
    })
  }
removefromcart(cartitem:CartItem){
  this.cartservice.removefromcart(cartitem.food.id)
}
changequantity(cartitem:CartItem,quantitystring:string){
  const quantity=parseInt(quantitystring);
  this.cartservice.changequantity(cartitem.food.id,quantity);
}
}
