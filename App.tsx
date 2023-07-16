import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigators/TabNav';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
