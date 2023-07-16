export type searchParams = {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  moviment: boolean;
  percentageGain: number;
}[];

export let routesInitialValue = [
  {
    key: 'mainMarker',
    title: 'Main Market',
  },
  {
    key: 'juniorMarket',
    title: 'Junior Market',
  },
  {
    key: 'fxRates',
    title: 'FX Rates',
  },
  {
    key: 'boundMarket',
    title: 'Bond Market',
  },
];

export type MarketStackParams = {
  Markets: undefined;
  Stock: {
    name: string;
  };
};

export interface StockCardParams {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  moviment: boolean;
  percentageGain: number;
  onPress: (name: string) => void;
}
