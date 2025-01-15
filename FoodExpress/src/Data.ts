import { count } from "rxjs";
import { Food } from "./shared/models/food";
import { Tag } from "./shared/models/tags";


export const sample_foods: Food[] = [
  {
    id: 1,
    name: 'Noodle',
    cooktime: '10-20',
    price: 90,
    favorite: false,
    star: 4,
    origins: ['itly', 'chines'],
    imageurl: 'assets/food1.jpg',
    tag: ['fastfood','noodle', 'chikennoodle']
  },
  {
    id: 2,
    name: 'Manchurian',
    cooktime: '10-20',
    price: 70,
    favorite: false,
    star: 4,
    origins: ['Indian', 'chines'],
    imageurl: 'assets/food2.jpg',
    tag: ['fastfood','veg', 'manchurian']
  },
  {
    id: 3,
    name: 'Burger',
    cooktime: '10',
    price: 110,
    favorite: false,
    star: 4,
    origins: ['American', 'Indian'],
    imageurl: 'assets/food3.jpg',
    tag: ['burger','chikenburger']
  },
  {
    id: 4,
    name: 'Farmhouse-Pizza',
    cooktime: '20',
    price: 120,
    favorite: false,
    star: 4,
    origins: ['itly', 'Indian'],
    imageurl: 'assets/food4.jpg',
    tag: ['pizza', 'farmhouse']
  },
  {
    id: 5,
    name: 'Roasted-Chiken-Full',
    cooktime: '15',
    price: 300,
    favorite: false,
    star: 4,
    origins: ['Indian', 'Arab'],
    imageurl: 'assets/food5.jpg',
    tag: ['chiken']
  },
  {
    id: 6,
    name: 'LemonChiken',
    cooktime: '10-20',
    price: 200,
    favorite: false,
    star: 4,
    origins: ['Indian', 'chines'],
    imageurl: 'assets/food6.jpg',
    tag: ['chiken']
  },
  {
    id: 7,
    name: 'Grill-Chiken',
    cooktime: '20',
    price: 250,
    favorite: false,
    star: 4,
    origins: ['Indian', 'Arab'],
    imageurl: 'assets/food7.jpg',
    tag: ['chiken']
  },
  {
    id: 8,
    name: 'Chiken-Biriyani',
    cooktime: '10-20',
    price: 120,
    favorite: false,
    star: 4,
    origins: ['India', 'Hydrabad'],
    imageurl: 'assets/food2.jpg',
    tag: [ 'chiken']
  },
]

export const sample_tags: Tag[] = [
  { name: "All", count: 9 },
  { name: "fastfood", count: 2 },
  { name: "pizza", count: 1 },
  { name: "burger", count: 1 },
  { name: "chiken", count: 4 }
]

