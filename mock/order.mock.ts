import type { Product } from './product.mock';
import type { Employee } from './employee.mock';
import { customer1, type Customer } from './customer.mock';
import { cheeseBurger, hotDog } from './product.mock';
import { waitress1, waitress2, waitress3 } from './employee.mock';
import { allTablesH1, allTablesH2, type Table } from './table.mock';

export interface Order {
  id: string;
  employee: Employee;
  isDelivery: boolean;
  state: string;
  products: Product[];
  table?: Table;
  customer: Customer;
  total_price: number;
}

export const pedido1: Order = {
  id: '12345',
  employee: waitress1,
  isDelivery: false,
  state: 'Tomado',
  products: [cheeseBurger],
  table: allTablesH1[0],
  customer: customer1,
  total_price: 25000,
};

export const pedido2: Order = {
  id: '345',
  employee: waitress2,
  isDelivery: true,
  state: 'Tomado',
  products: [hotDog],
  customer: customer1,
  total_price: 25000,
};

export const pedido3: Order = {
  id: '34',
  employee: waitress3,
  isDelivery: false,
  state: 'Tomado',
  products: [cheeseBurger, hotDog],
  table: allTablesH2[1],
  customer: customer1,
  total_price: 25000,
};

export const allOrders: Order[] = [pedido1, pedido2, pedido3];
