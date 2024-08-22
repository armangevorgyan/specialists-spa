import { fetchSpecialists } from '../../services/specialistsAPI.ts';
import { Specialist, Filters } from '../../types/types.ts';
import { createAppSlice } from '../createAppSlice.ts';

interface SpecialistsState {
  items: Specialist[];
  totalCount: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SpecialistsState = {
  items: [],
  totalCount: 0,
  loading: 'idle',
  error: null
};

export const specialistsSlice = createAppSlice({
  name: 'specialists',
  initialState,
  reducers: (create) => ({
    searchSpecialists: create.asyncThunk(
      async ({
        filters,
        limit,
        offset
      }: { filters: Filters; limit: number; offset: number }) => {
        return await fetchSpecialists(filters, limit, offset);
      },
      {
        pending: (state) => {
          state.loading = 'pending';
        },
        fulfilled: (state, action) => {
          state.loading = 'succeeded';
          state.items = action.payload.items;
          state.totalCount = action.payload.totalCount;
        },
        rejected: (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message || 'Failed to fetch specialists';
        }
      }
    )
  }),
  selectors: {
    selectSpecialists: (state: SpecialistsState) => state.items,
    selectTotalCount: (state: SpecialistsState) => state.totalCount,
    selectLoadingStatus: (state: SpecialistsState) => state.loading,
    selectError: (state: SpecialistsState) => state.error
  }
});
export const {
  searchSpecialists
} = specialistsSlice.actions;

export const {
  selectSpecialists,
  selectError,
  selectLoadingStatus,
  selectTotalCount
} = specialistsSlice.selectors;
