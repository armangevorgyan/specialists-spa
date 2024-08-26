import React, { useState, useEffect, useRef } from 'react';
import SpecialistCard from '../SpecialistCard/SpecialistCard.tsx';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import {
  searchSpecialists,
  selectError,
  selectLoadingStatus,
  selectSpecialists,
  selectTotalCount
} from '../../../store/specialists/specialistsSlice.ts';

import { selectFilters } from '../../../store/filter/filtersSlice.ts';
import { Grid, ListContainer, ShowMoreButton } from './specialistList.styles.ts';
import { Filters } from '../../../types/types.ts';


const SpecialistList: React.FC = () => {
  const specialistListRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectSpecialists);
  const loading = useAppSelector(selectLoadingStatus);
  const totalCount = useAppSelector(selectTotalCount);
  const error = useAppSelector(selectError);
  const filters: Filters = useAppSelector(selectFilters);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  useEffect(() => {
    // In Development Mode: useEffect might run twice due to React Strict Mode.
    dispatch(searchSpecialists({
      filters,
      limit: 12,
      offset: 0
    }));
    setOffset(0);

    specialistListRef?.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  }, [dispatch, filters]);

  const handleShowMore = () => {
    const newOffset = offset + limit;
    dispatch(searchSpecialists({
      filters,
      limit,
      offset: newOffset
    }));
    setOffset(newOffset);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ListContainer>
        <Grid ref={specialistListRef}>
          {items.map((specialist) => (
            <SpecialistCard key={specialist.userId} specialist={specialist}/>
          ))}
        </Grid>
      </ListContainer>

      {items.length < totalCount && (
        <ShowMoreButton onClick={handleShowMore} disabled={loading === 'pending'}>
          {loading === 'pending' ? 'Загрузка...' : 'Показать еще'}
        </ShowMoreButton>
      )}
    </>
  );
};

export default SpecialistList;
