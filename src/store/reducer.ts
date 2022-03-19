import {
  StoreState,
  ReducerCountriesCaseAction,
  CountryCase,
  UpdateCountryCase,
} from '../types';
import {ACTION_TYPES} from './action';
import {unionBy} from 'lodash';

const addCountryCases = (
  state: StoreState,
  countryCases: CountryCase[],
): CountryCase[] => {
  const cloneCases = [...state.countryCases];
  return unionBy(cloneCases, countryCases, 'CountryCode');
};

const updateCountryCase = (
  state: StoreState,
  countryCase: UpdateCountryCase | undefined,
): CountryCase[] => {
  const cloneCases = [...state.countryCases];
  if (!countryCase) {
    return cloneCases;
  }
  const findIdx = cloneCases.findIndex(
    item => item.CountryCode === countryCase.CountryCode,
  );
  if (findIdx !== -1) {
    const findItem = cloneCases[findIdx];
    findItem.NewConfirmed = findItem.NewConfirmed + countryCase.NewConfirmed;
    findItem.NewDeaths = findItem.NewDeaths + countryCase.NewDeaths;
    findItem.NewRecovered = findItem.NewRecovered + countryCase.NewConfirmed;
    findItem.TotalConfirmed =
      findItem.TotalConfirmed + countryCase.NewConfirmed;
    findItem.TotalDeaths = findItem.TotalDeaths + countryCase.NewDeaths;
    findItem.TotalRecovered =
      findItem.TotalRecovered + countryCase.NewRecovered;
    findItem.Date = countryCase.Date;
    cloneCases[findIdx] = findItem;
  } else {
    const newCountryCase: CountryCase = {
      ...countryCase,
      TotalConfirmed: countryCase.NewConfirmed,
      TotalDeaths: countryCase.NewDeaths,
      TotalRecovered: countryCase.NewRecovered,
      Slug: countryCase.CountryCode,
    };
    cloneCases.push(newCountryCase);
  }
  return cloneCases;
};

export const reducer = (
  state: StoreState,
  action: ReducerCountriesCaseAction,
): StoreState => {
  const type = action.type;
  switch (type) {
    case ACTION_TYPES.ADD_SUMMARIES:
      return {countryCases: addCountryCases(state, action?.countryCases ?? [])};
    case ACTION_TYPES.UPDATE_SUMMARY:
      return {countryCases: updateCountryCase(state, action?.countryCase)};
    default:
      return {countryCases: []};
  }
};
