import { Component } from '@angular/core';
import { Tag } from '../../../../shared/models/tags';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  tags?: Tag[];
  constructor(fss: FoodService) {
    this.tags = fss.getAllTags();
  }
}
