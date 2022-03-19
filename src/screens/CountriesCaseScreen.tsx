import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useStore, dispatchFetchCountriesCases} from '../store';
import {CountryCase, RootStackParamList} from '../types';
import {
  Container,
  StatisticItem,
  StatisticListHeader,
  CountriesCaseScreenHeader,
} from '../component';
import {FlatList} from 'react-native-gesture-handler';
import {useSortController} from '../hooks';
import {orderBy} from 'lodash';

type PageProps = StackNavigationProp<RootStackParamList, 'CountriesCase'>;

const CountriesCaseScreen = () => {
  const navigation = useNavigation<PageProps>();
  const sortController = useSortController();
  const {sortKey, searchStr, orderKey} = sortController;
  const countryCases = useStore(state => state.countryCases);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onLoadCases = () => {
    dispatchFetchCountriesCases(useStore.dispatch)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setErrorMsg('Something went wrong!');
      });
  };
  useEffect(() => {
    onLoadCases();
  }, []);

  const filteredCases = useMemo<CountryCase[]>(() => {
    let filteredItems = countryCases;
    if (searchStr) {
      filteredItems = filteredItems.filter(item =>
        item.Country.toLowerCase().includes(searchStr.toLowerCase()),
      );
    }
    if (sortKey && orderKey) {
      filteredItems = orderBy(filteredItems, sortKey, orderKey);
    }
    return filteredItems;
  }, [countryCases, searchStr, sortKey, orderKey]);

  const renderItem = ({item}: {item: CountryCase}) => (
    <StatisticItem data={item} />
  );

  return (
    <Container style={styles.container}>
      <>
        <CountriesCaseScreenHeader
          onBack={() => {
            navigation.goBack();
          }}
          sortController={sortController}
        />
        <FlatList
          style={styles.listStyle}
          data={filteredCases ?? []}
          renderItem={renderItem}
          keyExtractor={item => item.CountryCode}
          ListHeaderComponent={() => (
            <StatisticListHeader sortController={sortController} />
          )}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyContainer}>
                {loading ? (
                  <ActivityIndicator size={'large'} />
                ) : (
                  <Text>{errorMsg}</Text>
                )}
              </View>
            );
          }}
        />
      </>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  listStyle: {
    width: '100%',
    height: '100%',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
export default CountriesCaseScreen;
