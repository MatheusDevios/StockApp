import {
  ScrollView,
  Text,
  useWindowDimensions,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StockCard from '../../components/StockCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigators/TabNav';
import MenuIcon from '../../components/Icons/MenuIcon';
import SearchBar from '../../components/SearchBar';
import {TabBar, TabView} from 'react-native-tab-view';
import {JuniorStockData} from '../../data/JuniorStockData';
import {MainStockData} from '../../data/MainStockData';
import {FxRatesData} from '../../data/FxRatesData';
import {BondMarketData} from '../../data/BondMarket';

type Props = NativeStackScreenProps<MainStackParamList>;

const dimentionsForScreen = Dimensions.get('screen');

export type searchType = {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  moviment: boolean;
  percentageGain: number;
}[];

const Markets = ({navigation}: Props) => {
  const [searchJunior, setSearchJunior] = useState<searchType>(
    JuniorStockData.map(item => item),
  );
  const [searchMain, setSearchMain] = useState<searchType>(
    MainStockData.map(item => item),
  );
  const [searchFx, setSearchFx] = useState<searchType>(
    FxRatesData.map(item => item),
  );
  const [searchBond, setSearchBond] = useState<searchType>(
    BondMarketData.map(item => item),
  );
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {
      key: 'mainMarker',
      title: 'Main Market',
    },
    {
      key: 'juniorMarket',
      title: 'Junior Market',
    },
    {
      key: 'fxRates',
      title: 'FX Rates',
    },
    {
      key: 'boundMarket',
      title: 'Bond Market',
    },
  ]);

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

  const debounce = (callBackFunc: any) => {
    let timer: any;
    return function (...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callBackFunc(...args);
      }, 500);
    };
  };

  const handleSearchChange = debounce((value: any) => {
    setSearchMain(
      MainStockData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchJunior(
      JuniorStockData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchFx(
      FxRatesData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSearchBond(
      BondMarketData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
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
    height: dimentionsForScreen.height,
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
