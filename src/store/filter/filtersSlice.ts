import { PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '../../types/types.ts';
import { createAppSlice } from '../createAppSlice.ts';

const initialState: Filters = {
  level: 0,
  sex: 0,
  subjectId: 0,
  profSpeciality: 0,
  isCertified: false,
  ratingFrom: 0,
  ratingTo: 5,
  ageFrom: 18,
  ageTo: 99,
  filterType: 0
};

export const filtersSlice = createAppSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<Filters>>) => {
      return {...state, ...action.payload};
    },
    resetFilters: () => initialState
  },
  selectors: {
    selectFilters: (filters) => filters
  }
});

export const {
  setFilter,
  resetFilters
} = filtersSlice.actions;

export const {
  selectFilters
} = filtersSlice.selectors;
