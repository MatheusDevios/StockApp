import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  stockSymbol: string;
  name: string;
  graph: string;
  price: number;
  percentageGain: number;
  onPress: (name: string) => void;
}

const StockCard: React.FC<Props> = ({
  stockSymbol,
  name,
  graph,
  price,
  percentageGain,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{stockSymbol}</Text>
        <Text>{name}</Text>
        <Text>{graph}</Text>
        <Text>{price}</Text>
        <Text>{percentageGain}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
});

export default StockCard;
