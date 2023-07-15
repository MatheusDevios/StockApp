import {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type Props = {
  name: string;
  color: string;
  weight: string | number;
};

const MarketCategory: React.FC<Props> = ({name, color, weight}) => {
  return (
    <Pressable style={styles.button}>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 21,
          fontWeight: weight,
          letterSpacing: 0.25,
          color: color,
        }}>
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 9,
    elevation: 3,
  },
});

export default MarketCategory;
