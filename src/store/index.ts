import create from 'zustand';
import {redux} from 'zustand/middleware';

import {StoreState} from '../types';
import {reducer} from './reducer';

const initialState: StoreState = {
  countryCases: [],
};

const useStore = create(redux(reducer, initialState));

export {useStore};
export * from './action';
