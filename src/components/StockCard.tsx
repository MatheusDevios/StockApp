import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  moviment: boolean;
  percentageGain: number;
  onPress: (name: string) => void;
}

const StockCard: React.FC<Props> = ({
  stockSymbol,
  name,
  graph,
  price,
  percentageGain,
  moviment,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.simble}>{stockSymbol}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.graphContainer}>
          <Text style={styles.graph}>{graph}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={{fontSize: 12, color: moviment ? 'green' : 'red'}}>
            {moviment ? '+' : '-'}
            {percentageGain}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
  },
  simble: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 10,
    color: 'gray',
  },
  graphContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  graph: {
    flex: 1,
  },
  priceContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 12,
  },
});

export default StockCard;
