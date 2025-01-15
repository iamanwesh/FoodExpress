import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartquantity = 0;
  constructor(cartser: CartService) {
    cartser.getcartobservable().subscribe((newcart) => {
      this.cartquantity = newcart.totalcount;
    })
  }
}
