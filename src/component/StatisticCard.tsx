import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CountryCase} from '../types';
import {colors, formatNumber} from '../utilities';
interface Props {
  data: CountryCase;
}
const StatisticCard = ({data}: Props) => {
  const renderItem = ({
    description,
    totalCases,
    newCases,
    newCaseColor = colors.red.red,
  }: {
    description: string;
    totalCases: number;
    newCases: number;
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
      <View style={styles.itemContainer}>
        <Text style={styles.countryNameLabel}>{data.Country}</Text>
      </View>
      <View style={styles.rowContainer}>
        {renderItem({
          description: 'CONFIRMED',
          totalCases: data.TotalConfirmed,
          newCases: data.NewConfirmed,
        })}
        {renderItem({
          description: 'RECOVERED',
          totalCases: data.TotalRecovered,
          newCases: data.NewRecovered,
          newCaseColor: colors.green.green,
        })}
        {renderItem({
          description: 'DEATH',
          totalCases: data.TotalDeaths,
          newCases: data.NewDeaths,
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey.grey7,
    shadowColor: colors.grey.grey3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 2,
    marginBottom: 10,
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
  countryNameLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black.black,
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black.black,
    marginBottom: 4,
  },
  desLabel: {
    fontSize: 12,
    color: colors.grey.grey4,
    marginBottom: 4,
  },
  newConfirmLabel: {
    fontSize: 12,
    color: colors.red.red,
    fontWeight: '700',
  },
});
export default StatisticCard;
