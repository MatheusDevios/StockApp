import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigators/TabNav';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
