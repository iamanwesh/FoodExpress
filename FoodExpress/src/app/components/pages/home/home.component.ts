import { Component } from '@angular/core';
import { Food } from '../../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private fss: FoodService, activateed: ActivatedRoute) {
    activateed.params.subscribe((params) => {
      if (params['searchterm'])
        this.foods = this.fss.getAllFoodBySearch(params['searchterm']);
      else if(params['tag'])
        this.foods=this.fss.getAlltagByFood(params['tag']);
      else
        this.foods = fss.getAll();
    })

  }
}
