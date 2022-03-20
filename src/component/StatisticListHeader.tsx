import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {SortController} from '../hooks';
import {SORT_KEY} from '../types';
import {colors} from '../utilities';
import ImageIcon from './ImageIcon';
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
        <ImageIcon style={styles.sortIcon} iconName="arrowUp" />
      ) : (
        <ImageIcon style={styles.sortIcon} iconName="arrowDown" />
      );
    }
    return null;
  };

  const renderHeaderItem = (
    keyName: SORT_KEY,
    description: string,
    style?: StyleProp<ViewStyle>,
  ) => {
    return (
      <View style={[styles.itemContainer, style]}>
        <TouchableOpacity
          onPress={() => {
            if (sortKey === keyName) {
              onChangeOrder();
            }
            onChangeSortKey(keyName);
          }}>
          <Text
            style={[
              styles.desLabel,
              sortKey === keyName && styles.selectedText,
            ]}>
            {description}
          </Text>
        </TouchableOpacity>
        {sortKey === keyName && renderSortIcon()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer]}>
        <Text style={[styles.desLabel, searchStr ? styles.selectedText : {}]}>
          COUNTRY
        </Text>
      </View>
      {renderHeaderItem('TotalConfirmed', 'CONFIRMED')}
      {renderHeaderItem('TotalRecovered', 'RECOVERED')}
      {renderHeaderItem('TotalDeaths', 'DEATH', styles.smallItemContainer)}
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
