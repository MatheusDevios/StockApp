import {ScrollView, Text, StyleSheet, View} from 'react-native';
import MenuIcon from '../../components/Icons/MenuIcon';
import StockCard from '../../components/StockCard';
import {SendStockParams} from '../../models/marketModels';
import {MainStackParams} from '../../models/navModels';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

type Props = NativeStackScreenProps<MainStackParams>;

export const Portfolio = ({navigation}: Props) => {
  const portfolioStocks = useSelector(
    (state: RootState) => state.profile.items,
  );

  let content = portfolioStocks?.map((item, index) => (
    <StockCard
      key={index}
      name={item.name}
      symbol={item.symbol}
      image={item.image}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_24h={item.price_change_24h}
      price_change_percentage_24h={item.price_change_percentage_24h}
      sparkline_in_7d={item.sparkline_in_7d}
      onPress={(stock: SendStockParams) => navigation.navigate('Stock', stock)}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <MenuIcon color="black" />
        <Text style={styles.screenTitle}>Portfolio</Text>
      </View>
      {portfolioStocks.length > 0 && <ScrollView>{content}</ScrollView>}
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
    marginTop: 28,
    marginBottom: 24,
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

// const mapStateToProps = (state: any) => {
//   return {
//     item: state.profile.item,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
