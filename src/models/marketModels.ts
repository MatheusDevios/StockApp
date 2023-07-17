export type GraphParams = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  moviment: boolean;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
};

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
export interface StockCardParams {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
  onPress: (item: SendStockParams) => void;
}

export type MarketStackParams = {
  Markets: undefined;
  Stock: StockCardParams;
};

export type SendStockParams = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
};

export type DataParams = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
};

export type LineChartParams = {
  priceData: number[];
  current_price: number;
};
