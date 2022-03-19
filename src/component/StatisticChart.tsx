import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {colors} from '../utilities';
const screenWidth = Dimensions.get('window').width - 24;

interface Props {
  data: ChartData;
}
const StatisticChart = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chartStyle}
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        fromZero={true}
        chartConfig={{
          backgroundGradientFrom: colors.white.white,
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: colors.white.white,
          backgroundGradientToOpacity: 1,
          color: () => colors.red.red,
          barPercentage: 1,
          propsForBackgroundLines: {
            stroke: colors.white.white,
          },
        }}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        verticalLabelRotation={0}
        yAxisSuffix=""
      />
      <Text style={styles.desLabel}>TOTAL CONFIRMED</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  chartStyle: {
    paddingRight: 0,
    marginBottom: 0,
  },
  desLabel: {
    fontSize: 10,
    color: colors.grey.grey3,
  },
});

export default StatisticChart;
