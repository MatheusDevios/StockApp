import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import BackIcon from './Icons/BackIcon';

const BackButtom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#E5E5E5"
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
    margin: 8,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
  },
  backButton: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButtom;
