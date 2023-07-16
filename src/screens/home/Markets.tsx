import {
  ScrollView,
  Text,
  useWindowDimensions,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StockCard from '../../components/StockCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MenuIcon from '../../components/Icons/MenuIcon';
import SearchBar from '../../components/SearchBar';
import {TabBar, TabView} from 'react-native-tab-view';
import {
  DataParams,
  SendStockParams,
  routesInitialValue,
} from '../../models/marketModels';
import {MainStackParams} from '../../models/navModels';
import {getMarketData} from '../../services/cryptoService';
import {SAMPLE_DATA} from '../../data/CoinsData';

type Props = NativeStackScreenProps<MainStackParams>;

const Markets = ({navigation}: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(1);
  const [routes] = useState(routesInitialValue);
  const [mainData, setMainData] = useState<DataParams[] | undefined>([]);
  const [searchJunior, setSearchJunior] = useState<DataParams[] | undefined>(
    [],
  );
  const [searchMain, setSearchMain] = useState<DataParams[] | undefined>([]);
  const [searchFx, setSearchFx] = useState<DataParams[] | undefined>([]);
  const [searchBond, setSearchBond] = useState<DataParams[] | undefined>([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setMainData(marketData);
      //I'm using slice to limit the number of items in the array,
      //and not to overload with api requests neither the application nor the CoingeckoAPI
      //as the API has request limits
      //but in a real world scenario, I would request the data separatly for each tab.
      setSearchJunior(marketData?.slice(0, 19));
      setSearchMain(marketData?.slice(20, 39));
      setSearchFx(marketData?.slice(40, 59));
      setSearchBond(marketData?.slice(60, 79));
    };

    fetchMarketData();
  }, []);

  const stockCardContent = searchJunior?.map((item, index) => (
    <StockCard
      key={index}
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_percentage_24h={item.price_change_percentage_24h}
      sparkline_in_7d={item.sparkline_in_7d}
      onPress={(stock: SendStockParams) => navigation.navigate('Stock', stock)}
    />
  ));
  const mainStockCardContent = searchMain?.map((item, index) => (
    <StockCard
      key={index}
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_percentage_24h={item.price_change_percentage_24h}
      sparkline_in_7d={item.sparkline_in_7d}
      onPress={(stock: SendStockParams) => navigation.navigate('Stock', stock)}
    />
  ));
  const fxRatesStockCardContent = searchFx?.map((item, index) => (
    <StockCard
      key={index}
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_percentage_24h={item.price_change_percentage_24h}
      sparkline_in_7d={item.sparkline_in_7d}
      onPress={(stock: SendStockParams) => navigation.navigate('Stock', stock)}
    />
  ));
  const bondMarketStockCardContent = searchBond?.map((item, index) => (
    <StockCard
      key={index}
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_percentage_24h={item.price_change_percentage_24h}
      sparkline_in_7d={item.sparkline_in_7d}
      onPress={(stock: SendStockParams) => navigation.navigate('Stock', stock)}
    />
  ));

  const debounce = (callBackFunc: Function) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callBackFunc(...args);
      }, 300);
    };
  };

  const handleSearchChange = debounce((value: string) => {
    setSearchMain(
      mainData
        ?.slice(0, 19)
        .filter(
          item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.symbol.toLowerCase().includes(value.toLowerCase()),
        ),
    );
    setSearchJunior(
      mainData
        ?.slice(20, 39)
        .filter(
          item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.symbol.toLowerCase().includes(value.toLowerCase()),
        ),
    );
    setSearchFx(
      mainData
        ?.slice(40, 59)
        .filter(
          item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.symbol.toLowerCase().includes(value.toLowerCase()),
        ),
    );
    setSearchBond(
      mainData
        ?.slice(60, 79)
        .filter(
          item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.symbol.toLowerCase().includes(value.toLowerCase()),
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
