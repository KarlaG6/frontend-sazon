import type { Headquarter } from './headquarter.mock';
import type { Ingredient } from './ingredient.mock';
import { mozarellaCheese, burgerBread, sausage } from './ingredient.mock';
import { headquarters } from './headquarter.mock';

export interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  ingredients: Ingredient[];
  headquarter: Headquarter;
  price: number;
}

export const cheeseBurger: Product = {
  id: '123',
  name: 'Hamburgesa de queso',
  description: 'Deliciosa hamburguesa con relleno de queso',
  quantity: 4,
  ingredients: [mozarellaCheese, burgerBread],
  headquarter: headquarters[0],
  price: 25000,
};

export const hotDog: Product = {
  id: '234',
  name: 'Perro caliente',
  description: 'Perro caliente con queso',
  quantity: 10,
  ingredients: [mozarellaCheese, sausage],
  headquarter: headquarters[0],
  price: 25000,
};

export const allProducts: Product[] = [cheeseBurger, hotDog];
