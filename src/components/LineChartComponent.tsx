import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineChartParams} from '../models/marketModels';

const LineChartComponent: React.FC<LineChartParams> = props => {
  const {current_price, priceData} = props;

  const line = {
    labels: [],
    datasets: [
      {
        data: priceData,
        color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      },
    ],
  };

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
            fontSize: current_price > 1000 ? 9 : 12,
            fontWeight: 'bold',
          },
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({});
