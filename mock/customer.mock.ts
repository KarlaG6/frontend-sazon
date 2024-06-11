export interface Customer {
  id: string;
  name: string;
  phone?: string;
  email?: string;
}

export const customer1: Customer = {
  id: '2343567',
  name: 'Juancho Diaz',
};

export const customer2: Customer = {
  id: '4343567738',
  name: 'Milena Carasquilla',
};

export const customer3: Customer = {
  id: '3343567',
  name: 'Luis Gomez',
};
