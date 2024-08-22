import React, { useEffect } from 'react';
import SpecialistCard from './SpecialistCard';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import {
  searchSpecialists, selectError,
  selectLoadingStatus, selectSpecialists
} from '../../store/specialists/specialistsSlice.ts';
import { selectFilters } from '../../store/filter/filtersSlice.ts';

const SpecialistList: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectSpecialists);
  const loading = useAppSelector(selectLoadingStatus);
  const error = useAppSelector(selectError);
  const filters = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(searchSpecialists({
      filters,
      limit: 12,
      offset: 0
    }));
  }, [dispatch, filters]);

  if (loading === 'pending') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {items.map((specialist) => (
        <SpecialistCard key={specialist.userId} specialist={specialist}/>
      ))}
    </div>
  );
};

export default SpecialistList;
