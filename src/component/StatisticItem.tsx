import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CountryCase} from '../types';
import {colors, formatNumber} from '../utilities';
interface Props {
  data: CountryCase;
}
const StatisticItem = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer]}>
        <Text style={styles.countryNameLabel}>{data.Country}</Text>
      </View>
      <View style={[styles.itemContainer]}>
        <Text style={styles.valueLabel}>
          {formatNumber(data.TotalConfirmed)}
        </Text>
        <Text style={styles.newConfirmLabel}>
          +{formatNumber(data.NewConfirmed)}
        </Text>
      </View>
      <View style={[styles.itemContainer]}>
        <Text style={styles.valueLabel}>
          {formatNumber(data.TotalRecovered)}
        </Text>
        <Text style={[styles.newConfirmLabel, {color: colors.green.green}]}>
          +{formatNumber(data.NewRecovered)}
        </Text>
      </View>
      <View style={[styles.smallItemContainer]}>
        <Text style={styles.valueLabel}>{formatNumber(data.TotalDeaths)}</Text>
        <Text style={styles.newConfirmLabel}>
          +{formatNumber(data.NewDeaths)}
        </Text>
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
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  rowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1.2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  smallItemContainer: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  countryNameLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black.black,
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black.black,
    marginBottom: 4,
  },
  newConfirmLabel: {
    fontSize: 12,
    color: colors.red.red,
    fontWeight: '700',
  },
});
export default StatisticItem;
