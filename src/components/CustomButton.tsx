import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {ButtonParams} from '../models/componentsModel';

const CustomButton: React.FC<ButtonParams> = ({onPress, title}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    marginLeft: 40,
    marginRight: 40,
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
