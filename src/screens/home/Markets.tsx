import {ScrollView, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StockCard from '../../components/StockCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MarketCategory from './MarketCategory';
import {MainStackParamList} from '../../navigators/TabNav';
import {marketCategoryData} from '../../data/MarketCategoryData';
import {stockData} from '../../data/StockData';
import MenuIcon from '../../components/Icons/MenuIcon';
import SearchBar from '../../components/SearchBar';

type Props = NativeStackScreenProps<MainStackParamList>;

type searchType = {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  moviment: boolean;
  percentageGain: number;
}[];

const Markets = ({navigation}: Props) => {
  const [search, setSearch] = useState<searchType>([]);
  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    setSearch(stockData.map(item => item));
  }, []);

  const categoryContent = marketCategoryData.map((item, index) => (
    <MarketCategory
      key={index}
      name={item.name}
      color={item.color}
      weight={item.weight}
    />
  ));

  const stockCardContent = search.map((item, index) => (
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
    setValueSearch(value);
    setSearch(
      stockData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <MenuIcon color="black" />
        <Text style={styles.screenTitle}>Markets</Text>
        <SearchBar handleSearchChange={handleSearchChange} />
        <ScrollView horizontal={true} style={styles.marketContainer}>
          {categoryContent}
        </ScrollView>
      </View>
      <ScrollView style={styles.stockScroll}>{stockCardContent}</ScrollView>
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
    paddingTop: 32,
    backgroundColor: '#005BEA',
  },
  stockScroll: {},
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
});

export default Markets;
