export type MarketCategory = {
  name: string;
  id: number;
  color: string;
  weight: string;
};

export const marketCategoryData: MarketCategory[] = [
  {
    id: 1,
    name: 'Main Market',
    color: '#DCD6D0',
    weight: '400',
  },
  {
    id: 2,
    name: 'Junior Market',
    color: '#FFFFFF',
    weight: 'bold',
  },
  {
    id: 3,
    name: 'FX Rates',
    color: '#DCD6D0',
    weight: '400',
  },
  {
    id: 4,
    name: 'Bound Market',
    color: '#DCD6D0',
    weight: '400',
  },
];
