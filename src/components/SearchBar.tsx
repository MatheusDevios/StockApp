import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from './Icons/SearchIcon';

type Props = {
  handleSearchChange: (e: any) => void;
};

const SearchBar: React.FC<Props> = ({handleSearchChange}) => {
  return (
    <View style={styles.container}>
      <SearchIcon color="white" />
      <TextInput
        onChangeText={newText => {
          handleSearchChange(newText);
        }}
        // onFocus={handleSearchChange}
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
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    height: 45,
    borderRadius: 16,
    boxShadow: '0 3px 24px rgb(0 0 0 / 4%)',
    border: '1px solid #f0f2f3',
  },
  searchIcon: {},
  searchInput: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    fontSize: 'medium',
  },
});

export default SearchBar;
