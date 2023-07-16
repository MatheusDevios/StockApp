import {NavigatorScreenParams} from '@react-navigation/native';
import {MarketStackParams} from './marketModels';

export type MainStackParams = {
  MarketStack: NavigatorScreenParams<MarketStackParams>;
  Portfolio: undefined;
  News: undefined;
  Stock: {
    name: string;
  };
};
