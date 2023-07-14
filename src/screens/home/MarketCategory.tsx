import {StyleSheet, Text, View} from 'react-native';

const MarketCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.marketCat}>MarketCategory</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  marketCat: {
    fontSize: 16,
    fontWeight: '300',

    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default MarketCategory;
