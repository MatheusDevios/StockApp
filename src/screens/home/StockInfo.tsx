import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Button, Image, Alert} from 'react-native';
import BackButtom from '../../components/BackButtom';
import {MainStackParams} from '../../models/navModels';
import Graph from '../../components/StockInfo/Graph';
import CustomButton from '../../components/CustomButton';
import {addToPortfolio} from '../../redux/profileSlicer';
import {useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import TimeNavigationBar from '../../components/StockInfo/TimeNavigationBar';

type Props = NativeStackScreenProps<MainStackParams, 'Stock'>;

const StockInfo = ({route}: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    price_change_24h,
    sparkline_in_7d,
  } = route.params;
  const moviment = price_change_percentage_24h < 0 ? false : true;
  const data = sparkline_in_7d.price;

  const handleCustomButtonPress = () => {
    dispatch(
      addToPortfolio({
        name,
        symbol,
        image,
        current_price,
        market_cap,
        price_change_percentage_24h,
        price_change_24h,
        sparkline_in_7d,
      }),
    );
    console.log('Added to portfolio');
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperWrapper}>
        <BackButtom />
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <View style={styles.symbolImageWrapper}>
              <Text style={styles.simbol}>{symbol.toUpperCase()}</Text>
              <Image style={styles.image} source={{uri: image}} />
            </View>
            <Text style={styles.subtitle}>{name}</Text>
          </View>
          <View style={styles.daysWrapper}>
            <Text style={styles.subtitle}>7d</Text>
          </View>
        </View>
      </View>
      <Graph
        name={name}
        image={image}
        symbol={symbol}
        current_price={current_price}
        price_change_24h={price_change_24h}
        moviment={moviment}
        price_change_percentage_24h={price_change_percentage_24h}
        sparkline_in_7d={sparkline_in_7d}
        market_cap={market_cap}
      />
      <TimeNavigationBar stockData={sparkline_in_7d.price} />
      <View style={styles.infoWrapper}>
        <View style={styles.detaislInfo}>
          <Text style={styles.stockLabel}>Close Price</Text>
          <Text style={styles.stockInfo}>
            ${data[0].toLocaleString('en-US', {currency: 'USD'})}
          </Text>
        </View>
        <View style={styles.detaislInfo}>
          <Text style={styles.stockLabel}>Price Changed last 24h</Text>
          <Text style={styles.stockInfo}>
            ${price_change_24h.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
        </View>
        <View style={styles.detaislInfo}>
          <Text style={styles.stockLabel}>Market Value</Text>
          <Text style={styles.stockInfo}>
            ${market_cap.toLocaleString('en-US', {currency: 'USD'})}
          </Text>
        </View>
      </View>
      <CustomButton
        title="Add to Portfolio"
        onPress={handleCustomButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  upperWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  stockLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  stockInfo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoWrapper: {
    margin: 20,
    paddingBottom: 10,
    flexDirection: 'column',
    gap: 10,
  },
  detaislInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperTitles: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symbolImageWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  upperLeftTitle: {},
  simbol: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A9ABB1',
  },
  daysWrapper: {
    marginRight: 20,
  },
});

export default StockInfo;
