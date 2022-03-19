import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStatisticCase} from '../types';
import {colors, formatNumber} from '../utilities';
interface Props {
  data: GlobalStatisticCase;
}
const StatisticGlobalCard = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.valueLabel}>
            {formatNumber(data.TotalConfirmed)}
          </Text>
          <Text style={styles.desLabel}>CONFIRMED</Text>
          <Text style={styles.newConfirmLabel}>
            +{formatNumber(data.NewConfirmed)}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.valueLabel}>
            {formatNumber(data.TotalRecovered)}
          </Text>
          <Text style={styles.desLabel}>RECOVERED</Text>
          <Text style={[styles.newConfirmLabel, {color: colors.green.green}]}>
            +{formatNumber(data.NewRecovered)}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.valueLabel}>
            {formatNumber(data.TotalDeaths)}
          </Text>
          <Text style={styles.desLabel}>DEATH</Text>
          <Text style={styles.newConfirmLabel}>
            +{formatNumber(data.NewDeaths)}
          </Text>
        </View>
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
