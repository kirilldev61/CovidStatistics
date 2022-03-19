import axios from 'axios';
import {GlobalStatisticCase, CountryCase, Country} from '../types';
const BASE_URL = 'https://api.covid19api.com';

export const fetchGlobalStatisticCase = (): Promise<{
  globalCase: GlobalStatisticCase;
  countriesCase: CountryCase[];
}> => {
  return axios
    .get(`${BASE_URL}/summary`)
    .then(response => {
      return {
        globalCase: response.data.Global,
        countriesCase: response.data.Countries,
      };
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const fetchCountriesCases = (): Promise<CountryCase[]> => {
  return axios
    .get(`${BASE_URL}/summary`)
    .then(response => {
      return response.data.Countries;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const fetchCountries = (): Promise<Country[]> => {
  return axios
    .get(`${BASE_URL}/countries`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};
