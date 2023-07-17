import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppDispatch, RootState} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {changeTime} from '../../redux/timeManagerSlicer';
import {TimeNavigationBarParams} from '../../models/navModels';

const TimeNavigationBar = ({stockData}: TimeNavigationBarParams) => {
  const dispatch: AppDispatch = useDispatch();
  const [selected1D, setSelected1D] = useState(false);
  const [selected7D, setSelected7D] = useState(false);
  const [selected1M, setSelected1M] = useState(true);
  const [selected3M, setSelected3M] = useState(false);
  const [selected1Y, setSelected1Y] = useState(false);

  const handleTimePress = (time: string) => {
    setSelected1D(false);
    setSelected7D(false);
    setSelected1M(false);
    setSelected3M(false);
    setSelected1Y(false);
    switch (time) {
      case '1D':
        setSelected1D(true);
        dispatch(changeTime({time: '1D', stocks: stockData}));
        break;
      case '7D':
        dispatch(changeTime({time: '7D', stocks: stockData}));
        setSelected7D(true);
        break;
      case '1M':
        dispatch(changeTime({time: '1M', stocks: stockData}));
        setSelected1M(true);
        break;
      case '3M':
        dispatch(changeTime({time: '3M', stocks: stockData}));
        setSelected3M(true);
        break;
      case '1Y':
        dispatch(changeTime({time: '1Y', stocks: stockData}));
        setSelected1Y(true);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          selected1D ? styles.blackBackgorund : styles.transparentBackground,
          styles.backButton,
        ]}
        onPress={() => {
          handleTimePress('1D');
          console.log('1D button pressed');
        }}>
        <Text
          style={
            selected1D ? styles.blackBackgorund : styles.transparentBackground
          }>
          1D
        </Text>
      </Pressable>
      <Pressable
        style={[
          selected7D ? styles.blackBackgorund : styles.transparentBackground,
          styles.backButton,
        ]}
        onPress={() => {
          handleTimePress('7D');
          console.log('7D button pressed');
        }}>
        <Text
          style={
            selected7D ? styles.blackBackgorund : styles.transparentBackground
          }>
          7D
        </Text>
      </Pressable>
      <Pressable
        style={[
          selected1M ? styles.blackBackgorund : styles.transparentBackground,
          styles.backButton,
        ]}
        onPress={() => {
          handleTimePress('1M');
          console.log('1M button pressed');
        }}>
        <Text
          style={
            selected1M ? styles.blackBackgorund : styles.transparentBackground
          }>
          1M
        </Text>
      </Pressable>
      <Pressable
        style={[
          selected3M ? styles.blackBackgorund : styles.transparentBackground,
          styles.backButton,
        ]}
        onPress={() => {
          handleTimePress('3M');
          console.log('3M button pressed');
        }}>
        <Text
          style={
            selected3M ? styles.blackBackgorund : styles.transparentBackground
          }>
          3M
        </Text>
      </Pressable>
      <Pressable
        style={[
          selected1Y ? styles.blackBackgorund : styles.transparentBackground,
          styles.backButton,
        ]}
        onPress={() => {
          console.log('1Y button pressed');
          handleTimePress('1Y');
        }}>
        <Text
          style={
            selected1Y ? styles.blackBackgorund : styles.transparentBackground
          }>
          1Y
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 10,
  },
  backButton: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'lightgray',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBackgorund: {
    backgroundColor: 'black',
    color: 'white',
    borderColor: 'black',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
    color: 'black',
  },
});

export default TimeNavigationBar;
