import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {SendStockParams, StockCardParams} from '../models/marketModels';

const StockCard: React.FC<StockCardParams> = props => {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    sparkline_in_7d,
    onPress,
  } = props;

  const stockData: SendStockParams = {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    sparkline_in_7d,
  };

  const moviment = price_change_percentage_24h < 0 ? '#FF3B30' : '#34C759';

  return (
    <TouchableOpacity onPress={() => onPress(stockData)}>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol}</Text>
          </View>
        </View>

        <View style={styles.graphContainer}>
          {/* <Text style={styles.graph}>graph</Text> */}
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${current_price.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.percentage, {color: moviment}]}>
            {price_change_percentage_24h}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  titlesWrapper: {
    marginLeft: 6,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#A9ABB1',
  },
  graphContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  graph: {
    flex: 1,
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  percentage: {
    fontSize: 10,
  },
});

export default StockCard;
