import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {GraphParams} from '../models/marketModels';
import LineChartComponent from './LineChartComponent';

const Graph: React.FC<GraphParams> = props => {
  const {
    name,
    symbol,
    image,
    current_price,
    sparkline_in_7d,
    market_cap,
    price_change_percentage_24h,
  } = props;
  const moviment = price_change_percentage_24h < 0 ? '#FF3B30' : '#34C759';
  const data = sparkline_in_7d.price;

  return (
    <View style={styles.GraphWrapper}>
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.subtitle}>
              {name} ({symbol.toUpperCase()})
            </Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>

        <View style={styles.lowerTitle}>
          <Text style={styles.boldTitle}>
            ${current_price.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.title, {color: moviment}]}>
            {price_change_percentage_24h.toFixed(3)}%
          </Text>
        </View>
      </View>
      <LineChartComponent current_price={current_price} priceData={data} />
    </View>
  );
};
const styles = StyleSheet.create({
  GraphWrapper: {},
  titlesWrapper: {
    margin: 16,
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
  },
});

export default Graph;
