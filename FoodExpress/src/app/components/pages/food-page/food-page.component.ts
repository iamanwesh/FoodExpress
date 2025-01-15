import { Component } from '@angular/core';
import { Food } from '../../../../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;
  constructor(activated: ActivatedRoute,
     fss: FoodService,private carts:CartService,private router:Router) {
    activated.params.subscribe((params) => {
      if (params['id'])
        this.food = fss.getFoodById(params['id'])
  })
  }
addtocart(){
  this.carts.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}
}
