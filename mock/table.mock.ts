import type { Headquarter } from './headquarter.mock';
import { headquarters } from './headquarter.mock';

export interface Table {
  id: string;
  headquarter: Headquarter;
}

export const allTablesH1: Table[] = [
  {
    id: '1',
    headquarter: headquarters[0],
  },
  {
    id: '2',
    headquarter: headquarters[0],
  },
];

export const allTablesH2: Table[] = [
  {
    id: '1',
    headquarter: headquarters[1],
  },
  {
    id: '2',
    headquarter: headquarters[1],
  },
];
