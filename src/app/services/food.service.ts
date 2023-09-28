import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food.class';
import { Tag } from '../shared/models/tag.class';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    const allFoods = this.getAll();
    const tagCounts: { [key: string]: number } = {};

    // Initialize tagCounts with default values
    allFoods.forEach(food => {
      if (food.tags) {
        food.tags.forEach(tag => {
          if (tagCounts[tag]) {
            tagCounts[tag]++;
          } else {
            tagCounts[tag] = 1;
          }
        });
      }
    });

    // Convert tagCounts into Tag objects
    const tags: Tag[] = [];
    tags.push({ name: 'All', count: allFoods.length });

    for (const tagName in tagCounts) {
      tags.push({ name: tagName, count: tagCounts[tagName] });
    }

    return tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pepperoni Pizza',
        cookTime: '10-20',
        price: 200,
        favorite: true,
        imageUrl: '/assets/img/food/pepparoni.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/meatball.jpg',
        tags: ['Non-veg','Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 150,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/hamburger.jpg',
        tags: ['FastFood'],
      },
      {
        id: 4,
        name: 'French Fries',
        price: 60,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/frenchfries.jpg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Mixed pizza',
        price: 175,
        cookTime: '40-50',
        favorite: true,
        imageUrl: '/assets/img/food/mixed pizza.jpg',
        tags: ['Pizza','FastFood'],
      },
      {
        id: 6,
        name: 'Vegetable Pizza',
        price: 150,
        cookTime: '40-50',
        favorite: true,
        imageUrl: '/assets/img/food/vegpizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Fish Gravy',
        price: 200,
        cookTime: '40-50',
        favorite: true,
        imageUrl: '/assets/img/food/fish gravy.jpg',
        tags: ['Non-veg', 'Lunch'],
      },
      {
        id: 8,
        name: 'Chicken Biryani',
        price: 300,
        cookTime: '50-60',
        favorite: true,
        imageUrl: '/assets/img/food/chickenbriyani.jpg',
        tags: ['Biryani','Non-veg','Lunch'],
      },
      {
        id: 9,
        name: 'Prawn Biryani',
        price: 350,
        cookTime: '60-70',
        favorite: true,
        imageUrl: '/assets/img/food/prawn briyani.jpg',
        tags: ['Biryani','Non-veg','Lunch'],
      },
      {
        id: 10,
        name: 'Fish Biryani',
        price: 250,
        cookTime: '50-60',
        favorite: true,
        imageUrl: '/assets/img/food/Fish Biryani.jpg',
        tags: ['Biryani','Non-veg','Lunch'],
      },
      {
        id: 11,
        name: 'Egg Biryani',
        price: 175,
        cookTime: '50-60',
        favorite: true,
        imageUrl: '/assets/img/food/egg biryani.jpg',
        tags: ['Biryani','Non-veg','Lunch'],
      },
      {
        id: 12,
        name: 'Chicken Lolipop',
        price: 200,
        cookTime: '50-60',
        favorite: true,
        imageUrl: '/assets/img/food/chicken lolipop.jpg',
        tags: ['Non-veg','Lunch'],
      },
      {
        id: 13,
        name: 'Mushroom Soup',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/mushroom soup.jpg',
        tags: ['Soup','Lunch','Veg'],
      },
      {
        id: 14,
        name: 'Carrot Rice',
        price: 50,
        cookTime: '20-35',
        favorite: true,
        imageUrl: '/assets/img/food/carrot rice.jpg',
        tags: ['Veg','Lunch'],
      },
      {
        id: 15,
        name: 'Masala dosa',
        price: 120,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/masala dosa.jpg',
        tags: ['Veg','Breakfast'],
      },
      {
        id: 16,
        name: 'Noodles',
        price: 100,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/Noodles.jpg',
        tags: ['Breakfast','FastFood'],
      },
      {
        id: 17,
        name: 'Pasta',
        price: 125,
        cookTime: '25-35',
        favorite: true,
        imageUrl: '/assets/img/food/Pasta.jpg',
        tags: ['FastFood'],
      },
      {
        id: 18,
        name: 'Roti',
        price: 60,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/Roti.jpg',
        tags: ['Breakfast'],
      },
      {
        id: 19,
        name: 'Tomato Rice',
        price: 50,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/tomato rice.jpg',
        tags: ['Veg','Lunch'],
      },
      {
        id: 20,
        name: 'Bread omelete',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/bread omelete.jpg',
        tags: ['Non-veg','Breakfast'],
      },
      {
        id: 21,
        name: 'Idly',
        price: 20,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/Idly.jpg',
        tags: ['Breakfast'],
      },
      {
        id: 22,
        name: 'Poori',
        price: 40,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/poori.jpg',
        tags: ['Breakfast'],
      },
      {
        id: 23,
        name: 'Lemon Juice',
        price: 25,
        cookTime: '2-5',
        favorite: true,
        imageUrl: '/assets/img/food/Lemon juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 24,
        name: 'Sandwich',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        imageUrl: '/assets/img/food/sandwich.jpg',
        tags: ['Breakfast'],
      },
      {
        id: 25,
        name: 'Orange Juice',
        price: 40,
        cookTime: '5-10',
        favorite: true,
        imageUrl: '/assets/img/food/orange juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 26,
        name: 'Watermelon Juice',
        price: 30,
        cookTime: '5-10',
        favorite: true,
        imageUrl: '/assets/img/food/watermelon juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 27,
        name: 'Chicken Wings',
        price: 80,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/chicken wings.jpg',
        tags: ['Lunch','Non-veg'],
      },
      {
        id: 28,
        name: 'Chicken Soup',
        price: 30,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/chicken soup.jpg',
        tags: ['Non-veg','Soup'],
      },
      {
        id: 29,
        name: 'Mushroom Fry',
        price: 50,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/mushroom fry.jpg',
        tags: ['Veg','Lunch'],
      },
      {
        id: 30,
        name: 'Fish soup',
        price: 30,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/fish soup.jpg',
        tags: ['Non-veg','Soup'],
      },
      {
        id: 31,
        name: 'Tomato Soup',
        price: 30,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/tomato soup.jpg',
        tags: ['Veg','Soup'],
      },
      {
        id: 32,
        name: 'Grape Juice',
        price: 30,
        cookTime: '5-10',
        favorite: true,
        imageUrl: '/assets/img/food/grape juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 33,
        name: 'Carrot Juice',
        price: 40,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/carrot juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 34,
        name: 'Apple Juice',
        price: 50,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/apple juice.jpg',
        tags: ['Breakfast','Juice'],
      },
      {
        id: 35,
        name: 'Pineapple Juice',
        price: 60,
        cookTime: '10-15',
        favorite: true,
        imageUrl: '/assets/img/food/pineapple juice.jpg',
        tags: ['Breakfast','Juice'],
      },
    ];
  }
}
