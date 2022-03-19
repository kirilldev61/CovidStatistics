import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SortController} from '../hooks';
import {colors} from '../utilities';
interface Props {
  sortController: SortController;
}

const StatisticListHeader = ({sortController}: Props) => {
  const {searchStr, sortKey, orderKey, onChangeOrderKey, onChangeSortKey} =
    sortController;

  const onChangeOrder = () => {
    onChangeOrderKey(orderKey === 'asc' ? 'desc' : 'asc');
  };

  const renderSortIcon = () => {
    if (orderKey) {
      return orderKey === 'asc' ? (
        <Image
          style={styles.sortIcon}
          source={require('../assets/png/up-arrow.png')}
        />
      ) : (
        <Image
          style={styles.sortIcon}
          source={require('../assets/png/down-arrow.png')}
        />
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer]}>
        <Text style={[styles.desLabel, searchStr ? styles.selectedText : {}]}>
          COUNTRY
        </Text>
      </View>
      <View style={[styles.itemContainer]}>
        <TouchableOpacity
          onPress={() => {
            if (sortKey === 'TotalConfirmed') {
              onChangeOrder();
            }
            onChangeSortKey('TotalConfirmed');
          }}>
          <Text
            style={[
              styles.desLabel,
              sortKey === 'TotalConfirmed' && styles.selectedText,
            ]}>
            CONFIRMED
          </Text>
        </TouchableOpacity>
        {sortKey === 'TotalConfirmed' && renderSortIcon()}
      </View>
      <View style={[styles.itemContainer]}>
        <TouchableOpacity
          onPress={() => {
            if (sortKey === 'TotalRecovered') {
              onChangeOrder();
            }
            onChangeSortKey('TotalRecovered');
          }}>
          <Text
            style={[
              styles.desLabel,
              sortKey === 'TotalRecovered' && styles.selectedText,
            ]}>
            RECOVERED
          </Text>
        </TouchableOpacity>
        {sortKey === 'TotalRecovered' && renderSortIcon()}
      </View>
      <View style={[styles.smallItemContainer]}>
        <TouchableOpacity
          onPress={() => {
            if (sortKey === 'TotalDeaths') {
              onChangeOrder();
            }
            onChangeSortKey('TotalDeaths');
          }}>
          <Text
            style={[
              styles.desLabel,
              sortKey === 'TotalDeaths' && styles.selectedText,
            ]}>
            DEATH
          </Text>
        </TouchableOpacity>
        {sortKey === 'TotalDeaths' && renderSortIcon()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white.white,
    borderTopWidth: 1,
    borderTopColor: colors.grey.grey5,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemContainer: {
    flex: 1.2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  smallItemContainer: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  desLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black.black,
  },
  sortIcon: {
    width: 12,
    height: 12,
  },
  selectedText: {
    fontWeight: '800',
  },
});
export default StatisticListHeader;
