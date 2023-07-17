import {NavigatorScreenParams} from '@react-navigation/native';
import {
  MarketStackParams,
  SendStockParams,
  StockCardParams,
} from './marketModels';

export type MainStackParams = {
  MarketStack: NavigatorScreenParams<MarketStackParams>;
  PortfolioStack: PortfolioStackParams;
  News: undefined;
  Stock: SendStockParams;
};

export type PortfolioStackParams = {
  Portfolio: undefined;
  Stock: StockCardParams;
};

export type TimeNavigationBarParams = {
  stockData: number[];
};
