import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketStackScreen, {MarketStackParams} from './MarketStack';
import {Portfolio} from '../screens/portfolio/Portfolio';
import News from '../screens/news/News';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackParamList = {
  MarketStack: NavigatorScreenParams<MarketStackParams>;
  Portfolio: undefined;
  News: undefined;
  Stock: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<MainStackParamList>();

const TabNav: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="MarketStack">
      <RootStack.Screen name="Portfolio" component={Portfolio} />
      <RootStack.Screen name="MarketStack" component={MarketStackScreen} />
      <RootStack.Screen name="News" component={News} />
    </RootStack.Navigator>
  );
};

export default TabNav;
