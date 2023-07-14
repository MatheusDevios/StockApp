import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Markets from './src/screens/home/Markets';
import {Portfolio} from './src/screens/portfolio/Portfolio';
import News from './src/screens/news/News';
import StockInfo from './src/screens/home/StockInfo';

export type MainStackParamList = {
  Markets: undefined;
  Portfolio: undefined;
  News: undefined;
  Stock: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<MainStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Markets">
        <RootStack.Screen name="Portfolio" component={Portfolio} />
        <RootStack.Screen name="Markets" component={Markets} />
        <RootStack.Screen name="News" component={News} />
        <RootStack.Screen name="Stock" component={StockInfo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
