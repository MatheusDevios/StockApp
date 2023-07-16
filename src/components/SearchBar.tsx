import {StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from './Icons/SearchIcon';
import {SearchBarParams} from '../models/searchBarModels';

const SearchBar: React.FC<SearchBarParams> = ({handleSearchChange}) => {
  return (
    <View style={styles.container}>
      <SearchIcon color="white" />
      <TextInput
        style={styles.searchInput}
        onChangeText={newText => {
          handleSearchChange(newText);
        }}
        placeholder="Search Products.."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderRadius: 16,
    marginBottom: 12,
  },
  searchIcon: {},
  searchInput: {
    width: '85%',
    height: '100%',
    borderRadius: 12,
  },
});

export default SearchBar;
