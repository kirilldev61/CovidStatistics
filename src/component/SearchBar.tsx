import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utilities';
interface Props {
  onSearch: (value: string) => void;
  onCancelSearch: () => void;
}

function SearchBar({onSearch, onCancelSearch}: Props) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInputText}
          returnKeyType="search"
          onChangeText={onSearch}
        />
      </View>
      <TouchableOpacity
        style={styles.searchCancelContainer}
        onPress={onCancelSearch}>
        <Text style={styles.searchCancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey.grey7,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 9,
    marginRight: 15,
  },
  searchCancelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputText: {
    flex: 1,
    fontSize: 17,
    color: colors.black.black,
    marginHorizontal: 15,
  },
  searchCancelText: {
    fontSize: 16,
    lineHeight: 19.09,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: colors.black.black,
  },
});
export default SearchBar;
