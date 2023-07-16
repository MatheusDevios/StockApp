import {NavigatorScreenParams} from '@react-navigation/native';
import {
  MarketStackParams,
  SendStockParams,
  StockCardParams,
} from './marketModels';

export type MainStackParams = {
  MarketStack: NavigatorScreenParams<MarketStackParams>;
  Portfolio: undefined;
  News: undefined;
  Stock: SendStockParams;
};
