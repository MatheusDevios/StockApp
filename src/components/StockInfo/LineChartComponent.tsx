import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineChartParams} from '../../models/marketModels';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '../../redux/store';
import {changeTime} from '../../redux/timeManagerSlicer';

const LineChartComponent: React.FC<LineChartParams> = props => {
  const {current_price, priceData} = props;
  const dispatch: AppDispatch = useDispatch();
  let graphLabelSize =
    current_price >= 10000 ? 9 : current_price >= 1000 ? 10.5 : 12;
  const stockData = useSelector((state: RootState) => state.timeManager.items);

  const line = {
    labels: [],
    datasets: [
      {
        data: stockData.length > 0 ? stockData : priceData,
        color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      },
    ],
  };

  useEffect(() => {
    dispatch(changeTime({time: '1M', stocks: priceData}));
  }, []);

  return (
    <View>
      <LineChart
        data={line}
        width={Dimensions.get('window').width} // from react-native
        height={200}
        withDots={false}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundGradientFrom: '#005BEA',
          backgroundGradientTo: '#005BEA',
          propsForLabels: {
            fontSize: graphLabelSize,
            fontWeight: 'bold',
          },
          // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 3,
        }}
      />
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({});
