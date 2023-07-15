import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Markets from '../screens/home/Markets';
import StockInfo from '../screens/home/StockInfo';

export type MarketStackParams = {
  Markets: undefined;
  Stock: {
    name: string;
  };
};

const MarketStack = createNativeStackNavigator<MarketStackParams>();

const MarketStackScreen = () => {
  return (
    <MarketStack.Navigator initialRouteName="Markets">
      <MarketStack.Screen name="Markets" component={Markets} />
      <MarketStack.Screen name="Stock" component={StockInfo} />
    </MarketStack.Navigator>
  );
};

export default MarketStackScreen;
