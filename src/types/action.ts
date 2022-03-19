import {CountryCase, UpdateCountryCase} from './common';
export type ReducerCountriesCaseAction = {
  type: string;
  countryCases?: CountryCase[];
  countryCase?: UpdateCountryCase;
};

export type DispatchAction = {
  data: CountryCase[] | null;
  error?: unknown | null;
};
