import {
  CountryCase,
  UpdateCountryCase,
  ReducerCountriesCaseAction,
  DispatchAction,
} from '../types';
import {fetchCountriesCases} from '../api';

export const ACTION_TYPES = {
  ADD_SUMMARIES: 'ADD_SUMMARIES',
  UPDATE_SUMMARY: 'UPDATE_SUMMARY',
};

export const addCountriesCases = (
  countryCases: CountryCase[],
): ReducerCountriesCaseAction => ({
  type: ACTION_TYPES.ADD_SUMMARIES,
  countryCases,
});

export const updateCountryCase = (
  countryCase: UpdateCountryCase,
): ReducerCountriesCaseAction => ({
  type: ACTION_TYPES.UPDATE_SUMMARY,
  countryCase,
});

export const dispatchFetchCountriesCases = async (
  dispath: any,
): Promise<DispatchAction> => {
  try {
    const countryCases = await fetchCountriesCases();
    dispath(addCountriesCases(countryCases));
    return {
      data: countryCases,
    };
  } catch (error) {
    throw new Error('Error happens');
  }
};
