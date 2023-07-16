import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import {MainStackParamList} from '../../navigators/TabNav';
import BackButtom from '../../components/BackButtom';
// import {MainStackParamList} from '../../../App';

type Props = NativeStackScreenProps<MainStackParamList, 'Stock'>;

const StockInfo: React.FC<Props> = ({route}) => {
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <BackButtom />
      <Text style={styles.screenTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StockInfo;
