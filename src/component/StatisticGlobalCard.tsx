import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStatisticCase} from '../types';
import {colors, formatNumber} from '../utilities';
interface Props {
  data: GlobalStatisticCase;
}
const StatisticGlobalCard = ({data}: Props) => {
  const renderItemValue = ({
    totalCases,
    newCases,
    description,
    newCaseColor = colors.red.red,
  }: {
    totalCases: number;
    newCases: number;
    description: string;
    newCaseColor?: string;
  }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.valueLabel}>{formatNumber(totalCases)}</Text>
        <Text style={styles.desLabel}>{description}</Text>
        <Text style={[styles.newConfirmLabel, {color: newCaseColor}]}>
          +{formatNumber(newCases)}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {renderItemValue({
          totalCases: data.TotalConfirmed,
          newCases: data.NewConfirmed,
          description: 'CONFIRMED',
        })}
        {renderItemValue({
          totalCases: data.TotalRecovered,
          newCases: data.NewRecovered,
          description: 'RECOVERED',
          newCaseColor: colors.green.green,
        })}
        {renderItemValue({
          totalCases: data.TotalDeaths,
          newCases: data.NewDeaths,
          description: 'DEATH',
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 4,
    margin: 2,
    marginBottom: 22,
  },
  rowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  valueLabel: {
    fontSize: 24,
    fontWeight: '400',
    color: colors.black.black,
    marginBottom: 8,
  },
  desLabel: {
    fontSize: 16,
    color: colors.grey.grey3,
    marginBottom: 6,
  },
  newConfirmLabel: {
    fontSize: 16,
    color: colors.red.red,
    fontWeight: '700',
  },
});
export default StatisticGlobalCard;
