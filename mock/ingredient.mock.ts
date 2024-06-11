export interface Ingredient {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  status: string;
}

export const mozarellaCheese: Ingredient = {
  id: '1',
  name: 'queso mozarella',
  description: 'queso mozarella',
  quantity: 5,
  status: 'disponible',
};

export const burgerBread: Ingredient = {
  id: '1',
  name: 'pan de hamburguesa',
  quantity: 3,
  status: 'agotado',
};

export const sausage: Ingredient = {
  id: '1',
  name: 'salchicha',
  quantity: 2,
  status: 'disponible',
};

export const allIngredients: Ingredient[] = [mozarellaCheese, burgerBread];
