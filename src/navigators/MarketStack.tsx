import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Markets from '../screens/home/Markets';
import StockInfo from '../screens/home/StockInfo';
import {MarketStackParams} from '../models/marketModels';

const MarketStack = createNativeStackNavigator<MarketStackParams>();

const MarketStackScreen = () => {
  return (
    <MarketStack.Navigator
      initialRouteName="Markets"
      screenOptions={{
        headerShown: false,
      }}>
      <MarketStack.Screen name="Markets" component={Markets} />
      <MarketStack.Screen name="Stock" component={StockInfo} />
    </MarketStack.Navigator>
  );
};

export default MarketStackScreen;
