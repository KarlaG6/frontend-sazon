export interface Employee {
  id: string;
  name: string;
  type: string;
  phone?: string;
  email?: string;
}

export const manager1: Employee = {
  id: '23',
  name: 'Jean Carlos',
  type: 'manager',
};

export const waitress1: Employee = {
  id: '43',
  name: 'Beatriz',
  type: 'waitress',
};

export const waitress2: Employee = {
  id: '44',
  name: 'Gabriela',
  type: 'waitress',
};

export const waitress3: Employee = {
  id: '45',
  name: 'Tom',
  type: 'waitress',
};

export const cook1: Employee = {
  id: '5',
  name: 'Camilo',
  type: 'cook',
};

export const allEmployees: Employee[] = [manager1, waitress1, cook1];
