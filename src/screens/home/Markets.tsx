import {ScrollView, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import StockCard from '../../components/StockCard';
import Menu from '../../components/Menu';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../App';
import MarketCategory from './MarketCategory';

type Props = NativeStackScreenProps<MainStackParamList, 'Markets'>;

const Markets: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Markets</Text>
      <ScrollView horizontal={true} style={styles.marketContainer}>
        <MarketCategory />
        <MarketCategory />
        <MarketCategory />
        <MarketCategory />
      </ScrollView>
      <ScrollView>
        <StockCard
          stockSymbol="DJIA"
          name="Dow Jone Industry"
          graph="safa"
          price={100}
          percentageGain={0.38}
          onPress={(name: string) => navigation.navigate('Stock', {name})}
        />
        <StockCard
          stockSymbol="BC"
          name="BitCoin"
          graph="safa"
          price={100}
          percentageGain={0.38}
          onPress={(name: string) => navigation.navigate('Stock', {name})}
        />
        <StockCard
          stockSymbol="Meta"
          name="Meta Company"
          graph="safa"
          price={100}
          percentageGain={0.38}
          onPress={(name: string) => navigation.navigate('Stock', {name})}
        />
        <StockCard
          stockSymbol="ITJ"
          name="ITAU"
          graph="safa"
          price={100}
          percentageGain={0.38}
          onPress={(name: string) => navigation.navigate('Stock', {name})}
        />
      </ScrollView>
      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  marketContainer: {
    marginTop: 14,
    marginBottom: 14,
  },
});

export default Markets;
