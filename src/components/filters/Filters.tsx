import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks.ts';
import { useSelector } from 'react-redux';
import { getSubjects, selectFilters, selectSubjects, setFilter } from '../../store/filter/filtersSlice.ts';
import { Button, FilterContainer, FilterWrapper, Label, Select, Option, SelectContainer } from './filter.styles.ts';
import { Subject } from '../../types/types.ts';
import { useSearchParams } from 'react-router-dom';
import { FilterOptions } from './FilterOptions.ts';


const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);
  const subjects = useSelector(selectSubjects);
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
    // In Development Mode: useEffect might run twice due to React Strict Mode.
    const params: { [key: string]: string } = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== '') {
        params[key] = value.toString();
      }
    });

    setSearchParams(params);
    dispatch(getSubjects());

  }, [dispatch, filters, setSearchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    dispatch(setFilter({[name]: value}));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [from, to] = e.target.value.split('-').map(Number);
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
            <Select name='sex' value={filters.sex} onChange={handleFilterChange}>
              {FilterOptions.sex.map((sex) => <Option className='filterOption' key={sex.value} value={sex.value}>{sex.label}</Option>)}
            </Select>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label>В возрасте </Label> <
          SelectContainer>
          <Label fontSize={16} fontWeight={600} $mb='0'> От: </Label>
          <Select name='ageFrom' value={filters.ageFrom} onChange={handleFilterChange} $mr='55px'>
            <Option className='filterOption' value={''}>От</Option>)
            {FilterOptions.age.map((age) => <Option className='filterOption' key={age.value} value={age.value}>{age.label}</Option>)}
          </Select>
          <Label fontSize={16} fontWeight={600} $mb='0'> До: </Label>
          <Select name='ageTo' value={filters.ageTo} onChange={handleFilterChange}>
            <Option className='filterOption' value={''}>До</Option>)
            {FilterOptions.age.map((age) => <Option className='filterOption' key={age.value} value={age.value}>{age.label}</Option>)}
          </Select>
        </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Тема </Label>
          <SelectContainer>
            <Select name='subjectId' value={filters.subjectId} onChange={handleFilterChange}>
              <Option value={''}>Все варианты</Option>
              {subjects?.map((subject: Subject) => (
                <Option key={subject.id} value={subject.id}>{subject.name}</Option>
              ))}
              {/* Add subject Options from API */}
            </Select>
          </SelectContainer>
        </FilterWrapper>
      </FilterContainer>
      <FilterContainer>
        <FilterWrapper>
          <Label> Квалификация </Label>
          <SelectContainer>
            <Select name='profSpeciality' value={filters.profSpeciality} onChange={handleFilterChange}>
              {FilterOptions.profSpeciality.map((prof) => <Option key={prof.value} value={prof.value}>{prof.label}</Option>)}
            </Select>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Рейтинг </Label>
          <SelectContainer>
            <Select name='rating' value={`${filters.ratingFrom}-${filters.ratingTo}`} onChange={handleRatingChange}>
              {FilterOptions.ratingOptions.map((rating) => <Option key={rating.value} value={rating.value}>{rating.label}</Option>)}
            </Select>
          </SelectContainer>
        </FilterWrapper>

        <FilterWrapper>
          <Label> </Label>
          <SelectContainer>
            <Button>Показать анкеты</Button>
          </SelectContainer>
        </FilterWrapper>
      </FilterContainer>

    </>
  );
};

export default Filters;
