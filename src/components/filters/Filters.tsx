import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks.ts';
import { useSelector } from 'react-redux';
import {
  getSubjects,
  selectFilters,
  selectSubjectLoading,
  selectSubjects,
  setFilter
} from '../../store/filter/filtersSlice.ts';
import { AgeContainer, Button, FilterContainer, FilterWrapper, Label, SelectContainer } from './filter.styles.ts';
import { Subject } from '../../types/types.ts';
import { useSearchParams } from 'react-router-dom';
import { FilterOptions } from './FilterOptions.ts';
import CustomSelect from '../shared/CustomSelect/CustomSelect.tsx';


const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);
  const subjects = useSelector(selectSubjects);
  const loading = useSelector(selectSubjectLoading);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlFilters: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      urlFilters[key] = value;
    }
    if (Object.keys(urlFilters).length > 0) {
      dispatch(setFilter(urlFilters));
    }

  }, [dispatch, searchParams]);

  useEffect(() => {
    const params: { [key: string]: string } = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== '') {
        params[key] = value.toString();
      }
    });

    setSearchParams(params);

    if (!loading && !subjects.length) {
      dispatch(getSubjects());
    }
  }, [dispatch, filters, loading, setSearchParams, subjects]);

  const handleFilterChange = (e: { target: { name: string; value: string } }) => {
    const {
      name,
      value
    } = e.target;
    const params: { [key: string]: string } = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== '') {
        params[key] = value.toString();
      }
    });
    if (value !== '') {
      params[name] = value;
    }
    setSearchParams(params);

    // dispatch(setFilter({[name]: value}));
  };

  const handleRatingChange = (e: { target: { name: string; value: string } }) => {
    const [from, to] = e.target.value.split('-').map(String);
    dispatch(setFilter({
      ratingFrom: from,
      ratingTo: to
    }));
  };

  return (
    <>
      <FilterContainer>
        <FilterWrapper>
          <Label> Я ищу психолога </Label>
          <SelectContainer>
            <CustomSelect name='sex' placeholder={'Пол'}
                          value={filters.sex}
                          onChange={handleFilterChange}
                          options={FilterOptions.sex}
            />
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label>В возрасте </Label>
          <SelectContainer>
            <AgeContainer>
              <Label fontSize={16} fontWeight={600} $mb='0'> От: </Label>
              <CustomSelect name='ageFrom' placeholder={'От'} mr={10}
                            value={filters.ageFrom}
                            onChange={handleFilterChange}
                            options={FilterOptions.age}/>
            </AgeContainer>

            <AgeContainer>
              <Label fontSize={16} fontWeight={600} $mb='0'> До: </Label>
              <CustomSelect name='ageTo' placeholder={'До'}
                            value={filters.ageTo}
                            onChange={handleFilterChange}
                            options={FilterOptions.age}/>
            </AgeContainer>

          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Тема </Label>
          <SelectContainer>
            <CustomSelect name='subjectId' placeholder={'Тема'}
                          value={filters.subjectId}
                          onChange={handleFilterChange}
                          options={subjects.length ? [{
                            value: '',
                            label: 'Все варианты'
                          }, ...subjects.map((subject: Subject) => ({
                            value: subject.id.toString(),
                            label: subject.name
                          }))] : []}
            />
          </SelectContainer>
        </FilterWrapper>
      </FilterContainer>
      <FilterContainer className='border-bottom'>
        <FilterWrapper>
          <Label> Квалификация </Label>
          <SelectContainer>
            <CustomSelect name='profSpeciality' placeholder={'Квалификация'}
                          value={filters.profSpeciality}
                          onChange={handleFilterChange}
                          options={FilterOptions.profSpeciality}/>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Рейтинг </Label>
          <SelectContainer>
            <CustomSelect name='rating' placeholder={'Рейтинг'}
                          value={`${filters.ratingFrom}-${filters.ratingTo}`}
                          onChange={handleRatingChange}
                          options={FilterOptions.ratingOptions}/>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label className='search-label'> </Label>
          <SelectContainer>
            <Button>Показать анкеты</Button>
          </SelectContainer>
        </FilterWrapper>
      </FilterContainer>
    </>);
};

export default Filters;
