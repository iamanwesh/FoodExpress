import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { sample_foods, sample_tags } from '../../Data';
import { Tag } from '../../shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Food[] {
    return sample_foods;
  }
  getAllFoodBySearch(searchterm: string) {
    return this.getAll().filter(foods => foods.name.toLowerCase().includes(searchterm.toLowerCase()))
  }
  getFoodById(foodid: number) {
    return this.getAll().find(foods => foods.id == foodid) ?? new Food();
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAlltagByFood(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(foods => foods.tag?.includes(tag));
  }
}
