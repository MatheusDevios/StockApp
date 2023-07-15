import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigators/TabNav';
import MarketStack from './src/navigators/MarketStack';

const MarketStackScreen = () => {
  return <MarketStack />;
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
