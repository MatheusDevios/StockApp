import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import BackButtom from '../../components/BackButtom';
import {MainStackParams} from '../../models/navModels';
import Graph from '../../components/Graph';

type Props = NativeStackScreenProps<MainStackParams, 'Stock'>;

const StockInfo = ({route}: Props) => {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    sparkline_in_7d,
  } = route.params;

  const moviment = price_change_percentage_24h < 0 ? false : true;

  return (
    <View style={styles.container}>
      <BackButtom />
      <Graph
        name={name}
        image={image}
        symbol={symbol}
        current_price={current_price}
        moviment={moviment}
        price_change_percentage_24h={price_change_percentage_24h}
        sparkline_in_7d={sparkline_in_7d}
        market_cap={market_cap}
      />
      <Text style={styles.screenTitle}>Stock Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StockInfo;
