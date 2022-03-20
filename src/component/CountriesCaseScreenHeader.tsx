import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SortController} from '../hooks';

import HeaderTitle from './HeaderTitle';
import SearchBar from './SearchBar';
import ImageIcon from './ImageIcon';
interface Props {
  onBack: () => void;
  sortController: SortController;
}
const CountriesCaseScreenHeader = ({onBack, sortController}: Props) => {
  const [searching, setSearching] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {searching ? (
        <SearchBar
          onSearch={sortController.onChangeSearchValue}
          onCancelSearch={() => {
            setSearching(false);
            sortController.onChangeSearchValue(null);
          }}
        />
      ) : (
        <>
          <TouchableOpacity style={styles.iconContainer} onPress={onBack}>
            <ImageIcon iconName="back" />
          </TouchableOpacity>
          <HeaderTitle title="Country" boldTitle="Statistics" />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              setSearching(true);
            }}>
            <ImageIcon iconName="search" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  iconContainer: {
    padding: 10,
  },
});

export default CountriesCaseScreenHeader;
