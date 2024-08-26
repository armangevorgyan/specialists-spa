import { PayloadAction } from '@reduxjs/toolkit';
import { Filters, Subject } from '../../types/types.ts';
import { createAppSlice } from '../createAppSlice.ts';
import { fetchSubjects } from '../../services/subjectsAPI.ts';

interface FiltersSliceProps {
  filters: Filters;
  subjects: Subject[],
  loading: 'pending' | 'success' | 'failed';
}

const initialState: FiltersSliceProps = {
  filters: {
    // level: 0,
    // sex: 1,
    // subjectId: 8,
    // profSpeciality: 0,
    // isCertified: false,
    // ratingFrom: 0,
    // ratingTo: 100,
    // ageFrom: 18,
    // ageTo: 99,
    // filterType: 0
  },
  subjects: [],
  loading: 'pending'
};
export const filtersSlice = createAppSlice({
  name: 'filters',
  initialState,
  reducers: (create) => ({
    getSubjects: create.asyncThunk(
      async () => {
        return await fetchSubjects();
      },
      {
        pending: (state) => {
          state.loading = 'pending';
        },
        fulfilled: (state, action) => {
          state.loading = 'success';
          state.subjects = action.payload;
        },
        rejected: (state) => {
          state.loading = 'failed';
        }
      }),
    setFilter: create.reducer((state, action: PayloadAction<Partial<Filters>>) => {
      return {
        ...state,
        filters: {...state.filters, ...action.payload}
      };
    }),
    resetFilters: create.reducer(() => {
      return initialState;
    })
  }),

  selectors: {
    selectFilters: (filters) => filters.filters,
    selectSubjects: (filters) => filters.subjects
  }
});

export const {
  getSubjects,
  setFilter,
  resetFilters
} = filtersSlice.actions;

export const {
  selectFilters,
  selectSubjects
} = filtersSlice.selectors;
