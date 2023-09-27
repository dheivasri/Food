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
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 200,
        favorite: true,
        imageUrl: '/assets/img/food/pepparoni.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/meatball.jpg',
        tags: ['Lunch'],
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
        name: 'Soup',
        price: 50,
        cookTime: '20-30',
        favorite: true,
        imageUrl: '/assets/img/food/soup.jpg',
        tags: ['Soup'],
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
        tags: ['Soup','Lunch'],
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
    ];
  }
}
