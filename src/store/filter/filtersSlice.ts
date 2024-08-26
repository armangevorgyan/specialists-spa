import { PayloadAction } from '@reduxjs/toolkit';
import { Filters, Subject } from '../../types/types.ts';
import { createAppSlice } from '../createAppSlice.ts';
import { fetchSubjects } from '../../services/subjectsAPI.ts';

interface FiltersSliceProps {
  filters: Filters;
  subjects: Subject[],
  loading: boolean;
}

const initialState: FiltersSliceProps = {
  filters: {},
  subjects: [],
  loading: false
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
          state.loading = true;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.subjects = action.payload;
        },
        rejected: (state) => {
          state.loading = false;
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
    selectFilters: (state) => state.filters,
    selectSubjects: (state) => state.subjects,
    selectSubjectLoading: (state) => state.loading
  }
});

export const {
  getSubjects,
  setFilter,
  resetFilters
} = filtersSlice.actions;

export const {
  selectFilters,
  selectSubjects,
  selectSubjectLoading
} = filtersSlice.selectors;
