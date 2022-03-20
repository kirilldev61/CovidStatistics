import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {CountryCase} from '../types';
import {colors, formatNumber} from '../utilities';
interface Props {
  data: CountryCase;
}
const StatisticItem = ({data}: Props) => {
  const renderItemValue = ({
    totalCases,
    newCases,
    itemStyle,
    newCaseColor = colors.red.red,
  }: {
    totalCases: number;
    newCases: number;
    itemStyle?: StyleProp<ViewStyle>;
    newCaseColor?: string;
  }) => {
    return (
      <View style={[styles.itemContainer, itemStyle]}>
        <Text style={styles.valueLabel}>{formatNumber(totalCases)}</Text>
        <Text style={[styles.newConfirmLabel, {color: newCaseColor}]}>
          +{formatNumber(newCases)}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer]}>
        <Text style={styles.countryNameLabel}>{data.Country}</Text>
      </View>
      {renderItemValue({
        totalCases: data.TotalConfirmed,
        newCases: data.NewConfirmed,
      })}
      {renderItemValue({
        totalCases: data.TotalRecovered,
        newCases: data.NewRecovered,
        newCaseColor: colors.green.green,
      })}
      {renderItemValue({
        totalCases: data.TotalDeaths,
        newCases: data.NewDeaths,
        itemStyle: styles.smallItemContainer,
      })}
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
    fontWeight: 'bold',
  },
});
export default StatisticItem;
