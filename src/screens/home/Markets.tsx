import {
  ScrollView,
  Text,
  useWindowDimensions,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import StockCard from '../../components/StockCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MenuIcon from '../../components/Icons/MenuIcon';
import SearchBar from '../../components/SearchBar';
import {TabBar, TabView} from 'react-native-tab-view';
import {JuniorStockData} from '../../data/JuniorStockData';
import {MainStockData} from '../../data/MainStockData';
import {FxRatesData} from '../../data/FxRatesData';
import {BondMarketData} from '../../data/BondMarket';
import {routesInitialValue, searchParams} from '../../models/marketModels';
import {MainStackParams} from '../../models/navModels';

type Props = NativeStackScreenProps<MainStackParams>;

const Markets = ({navigation}: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(1);
  const [routes] = useState(routesInitialValue);
  const [searchJunior, setSearchJunior] = useState<searchParams>(
    JuniorStockData.map(item => item),
  );
  const [searchMain, setSearchMain] = useState<searchParams>(
    MainStockData.map(item => item),
  );
  const [searchFx, setSearchFx] = useState<searchParams>(
    FxRatesData.map(item => item),
  );
  const [searchBond, setSearchBond] = useState<searchParams>(
    BondMarketData.map(item => item),
  );

  const stockCardContent = searchJunior.map((item, index) => (
    <StockCard
      key={index}
      stockSymbol={item.stockSymbol}
      name={item.name}
      graph={item.graph}
      price={item.price}
      moviment={item.moviment}
      percentageGain={item.percentageGain}
      onPress={(name: string) => navigation.navigate('Stock', {name})}
    />
  ));
  const mainStockCardContent = searchMain.map((item, index) => (
    <StockCard
      key={index}
      stockSymbol={item.stockSymbol}
      name={item.name}
      graph={item.graph}
      price={item.price}
      moviment={item.moviment}
      percentageGain={item.percentageGain}
      onPress={(name: string) => navigation.navigate('Stock', {name})}
    />
  ));
  const fxRatesStockCardContent = searchFx.map((item, index) => (
    <StockCard
      key={index}
      stockSymbol={item.stockSymbol}
      name={item.name}
      graph={item.graph}
      price={item.price}
      moviment={item.moviment}
      percentageGain={item.percentageGain}
      onPress={(name: string) => navigation.navigate('Stock', {name})}
    />
  ));
  const bondMarketStockCardContent = searchBond.map((item, index) => (
    <StockCard
      key={index}
      stockSymbol={item.stockSymbol}
      name={item.name}
      graph={item.graph}
      price={item.price}
      moviment={item.moviment}
      percentageGain={item.percentageGain}
      onPress={(name: string) => navigation.navigate('Stock', {name})}
    />
  ));

  const debounce = (callBackFunc: Function) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callBackFunc(...args);
      }, 500);
    };
  };

  const handleSearchChange = debounce((value: string) => {
    setSearchMain(
      MainStockData.filter(
        item =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.stockSymbol.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchJunior(
      JuniorStockData.filter(
        item =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.stockSymbol.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchFx(
      FxRatesData.filter(
        item =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.stockSymbol.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchBond(
      BondMarketData.filter(
        item =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.stockSymbol.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  });

  const handleRenderScene = ({route}: any) => {
    switch (route.key) {
      case 'mainMarker':
        return <ScrollView>{mainStockCardContent}</ScrollView>;
      case 'juniorMarket':
        return <ScrollView>{stockCardContent}</ScrollView>;
      case 'fxRates':
        return <ScrollView>{fxRatesStockCardContent}</ScrollView>;
      case 'boundMarket':
        return <ScrollView>{bondMarketStockCardContent}</ScrollView>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <MenuIcon color="black" />
        <Text style={styles.screenTitle}>Markets</Text>
        <SearchBar handleSearchChange={handleSearchChange} />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={handleRenderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        animationEnabled={true}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{backgroundColor: '#005BEA'}}
            scrollEnabled={true}
            renderLabel={({route, color}) => (
              <Text style={{color: color, fontWeight: 'bold'}}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
      <View style={{height: 95}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: '#005BEA',
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    marginBottom: 14,
    paddingLeft: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBar: {
    paddingLeft: 14,
    paddingBottom: 8,
  },
  marketContainer: {
    marginTop: 14,
    marginBottom: 14,
  },
  stockContainer: {
    backgroundColor: '#005BEA',
  },
});

export default Markets;
