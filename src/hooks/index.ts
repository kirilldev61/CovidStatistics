import {useQuery} from 'react-query';
import {fetchCountries, fetchGlobalStatisticCase} from '../api';
import {GlobalStatisticCase, CountryCase, Country} from '../types';

interface FetchGlobalStatisticCaseProps {
  globalCase: GlobalStatisticCase | undefined;
  countriesCase: CountryCase[] | undefined;
  error: unknown | null;
  fetching: boolean;
}

interface FetchCountryProps {
  countries: Country[] | undefined;
  error: unknown | null;
  fetching: boolean;
}

export const useFetchGlobalStatisticCase =
  (): FetchGlobalStatisticCaseProps => {
    const {data, isFetching, error} = useQuery(
      'globalSummary',
      fetchGlobalStatisticCase,
    );
    return {
      globalCase: data?.globalCase,
      countriesCase: data?.countriesCase,
      error,
      fetching: isFetching,
    };
  };

export const useFetchCountries = (): FetchCountryProps => {
  const {data, isFetching, error} = useQuery('countries', fetchCountries);
  return {
    countries: data,
    error,
    fetching: isFetching,
  };
};

export * from './sortController';
