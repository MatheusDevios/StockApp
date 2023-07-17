import {StyleSheet, Text, View} from 'react-native';
import {GraphParams} from '../../models/marketModels';
import LineChartComponent from './LineChartComponent';

const Graph: React.FC<GraphParams> = props => {
  const {current_price, sparkline_in_7d, price_change_percentage_24h} = props;
  const moviment = price_change_percentage_24h < 0 ? '#FF3B30' : '#34C759';
  const data = sparkline_in_7d.price;

  return (
    <View style={styles.GraphWrapper}>
      <View style={styles.titlesWrapper}>
        <View style={styles.lowerTitle}>
          <Text style={styles.boldTitle}>
            ${current_price.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
          <Text style={[styles.title, {color: moviment}]}>
            {moviment === '#34C759' && '+'}
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
    marginTop: 8,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitle: {
    alignItems: 'flex-start',
  },
  boldTitle: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Graph;
