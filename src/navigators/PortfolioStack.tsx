import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StockInfo from '../screens/home/StockInfo';
import {PortfolioStackParams} from '../models/navModels';
import {Portfolio} from '../screens/portfolio/Portfolio';

const PortfolioStack = createNativeStackNavigator<PortfolioStackParams>();

const PortfolioStackScreen = () => {
  return (
    <PortfolioStack.Navigator
      initialRouteName="Portfolio"
      screenOptions={{
        headerShown: false,
      }}>
      <PortfolioStack.Screen name="Portfolio" component={Portfolio} />
      <PortfolioStack.Screen name="Stock" component={StockInfo} />
    </PortfolioStack.Navigator>
  );
};

export default PortfolioStackScreen;
