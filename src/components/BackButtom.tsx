import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import BackIcon from './Icons/BackIcon';

const BackButtom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#f0ddcc"
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButtom;
