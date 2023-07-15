import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketStackScreen, {MarketStackParams} from './MarketStack';
import {Portfolio} from '../screens/portfolio/Portfolio';
import News from '../screens/news/News';
import {NavigatorScreenParams} from '@react-navigation/native';
import MarketIcon from '../components/Icons/MarketIcon';
import PortfolioIcon from '../components/Icons/PortfolioIcon';
import NewsIcon from '../components/Icons/NewsIcon';

export type MainStackParamList = {
  MarketStack: NavigatorScreenParams<MarketStackParams>;
  Portfolio: undefined;
  News: undefined;
  Stock: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<MainStackParamList>();

const TabNav = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MarketStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
          paddingTop: 15,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: '#005BEA',
        tabBarInactiveTintColor: 'darkgray',
      }}>
      <RootStack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({color, size}) => (
            <PortfolioIcon color={color} size={size} />
          ),
          tabBarLabel: 'Portfolio',
        }}
      />
      <RootStack.Screen
        name="MarketStack"
        component={MarketStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MarketIcon color={color} size={size} />
          ),
          tabBarLabel: 'Market',
        }}
      />
      <RootStack.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({color, size}) => <NewsIcon color={color} size={size} />,
          tabBarLabel: 'News',
        }}
      />
    </RootStack.Navigator>
  );
};

export default TabNav;
