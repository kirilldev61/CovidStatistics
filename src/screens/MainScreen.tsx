import React, {useCallback, useMemo} from 'react';
import {
  Button,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {
  Container,
  StatisticCard,
  StatisticGlobalCard,
  HeaderTitle,
  StatisticChart,
} from '../component';
import {useFetchGlobalStatisticCase} from '../hooks';
import {orderBy} from 'lodash';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {colors} from '../utilities';
import {TouchableOpacity} from 'react-native-gesture-handler';
type PageProps = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const navigation = useNavigation<PageProps>();
  const {globalCase, countriesCase, fetching, error} =
    useFetchGlobalStatisticCase();
  const mostTopCountriesCase = useMemo(() => {
    if (countriesCase) {
      return orderBy(countriesCase, 'TotalConfirmed', 'desc').slice(0, 5);
    }
    return [];
  }, [countriesCase]);

  const getChartData = useCallback((): ChartData => {
    const chartData: ChartData = {
      labels: mostTopCountriesCase.map(item => item.CountryCode),
      datasets: [
        {
          data: mostTopCountriesCase.map(item => item.TotalConfirmed),
        },
      ],
    };
    return chartData;
  }, [mostTopCountriesCase]);

  const onOpenReportCase = () => {
    navigation.push('Report');
  };

  if (fetching || error) {
    return (
      <View style={styles.emptyContainer}>
        {error ? <Text>Something went wrong</Text> : <ActivityIndicator />}
      </View>
    );
  }

  return (
    <Container style={styles.container}>
      <>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <HeaderTitle title="Global" boldTitle="Statistics" />
          {globalCase && <StatisticGlobalCard data={globalCase} />}
          {mostTopCountriesCase.length > 0 && (
            <>
              <HeaderTitle title="Top 5" boldTitle="Statistics" />
              <StatisticChart data={getChartData()} />
              {mostTopCountriesCase.map(item => (
                <StatisticCard key={item.CountryCode} data={item} />
              ))}
              <Button
                title="Show more"
                onPress={() => {
                  navigation.push('CountriesCase');
                }}
              />
            </>
          )}
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity onPress={onOpenReportCase}>
            <Image
              source={require('../assets/png/plus.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.blue.blue,
    shadowColor: colors.blue.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default MainScreen;
