import { useAppDispatch } from '../../store/hooks.ts';
import { useSelector } from 'react-redux';
import { selectFilters, setFilter } from '../../store/filter/filtersSlice.ts';
import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 20px;

    }
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
    
    @media (min-width: 768px) {
        width: 33%;
        max-width: 312px;
    }
`;
const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Label = styled.div<{ fontWeight?: number, fontSize?: number, mb?: string }>`
    display: flex;
    align-items: center;
    color: #000;
    margin-right: 12px;
    height: 27px;
    margin-bottom: ${({mb}) => mb || 12}px;
    font-weight: ${({fontWeight}) => fontWeight || 700};
    font-size: ${({fontSize}) => fontSize || 18}px;
`;


const Select = styled.select<{ mr?: string, ml?: string }>`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 52px;
    margin-right: ${({mr}) => mr || 0};
    margin-left: ${({ml}) => ml || 0};
`;

const Button = styled.button`
    background-color: #FF006B;
    color: white;
    border: none;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    border-radius: 2px;
    padding: 16px 68px;
    cursor: pointer;
    height: 52px;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 312px;
    }
`;

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    dispatch(setFilter({[name]: value}));
  };

  return (
    <>
      <FilterContainer>
        <FilterWrapper>
          <Label> Я ищу психолога </Label>
          <SelectContainer>
            <Select name='sex' value={filters.sex} onChange={handleFilterChange}>
              <option value='0'>Любого пола</option>
              <option value='1'>Мужчина</option>
              <option value='2'>Женщина</option>
            </Select>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label>В возрасте </Label> <
          SelectContainer>
          <Label fontSize={16} fontWeight={600} mb='0'> От: </Label>
          <Select name='ageFrom' value={filters.ageFrom} onChange={handleFilterChange} mr='55px'>
            <option value='18'>18</option>
            {/* Add more age options */}
          </Select>
          <Label fontSize={16} fontWeight={600} mb='0'> До: </Label>
          <Select name='ageTo' value={filters.ageTo} onChange={handleFilterChange}>
            <option value='74'> 74</option>
            {/* Add more age options */}
          </Select>
        </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Тема </Label>
          <SelectContainer>
            <Select name='subjectId' value={filters.subjectId} onChange={handleFilterChange}>
              <option value='0'>Любая</option>
              {/* Add subject options from API */}
            </Select>
          </SelectContainer>
        </FilterWrapper>
      </FilterContainer>
      <FilterContainer>
        <FilterWrapper>
          <Label> Квалификация </Label>
          <SelectContainer>
            <Select name='profSpeciality' value={filters.profSpeciality} onChange={handleFilterChange}>
              <option value='0'>Все варианты</option>
              <option value='1'>Консультант</option>
              <option value='2'>Сексолог</option>
              <option value='3'>Коуч</option>
            </Select>
          </SelectContainer>
        </FilterWrapper>
        <FilterWrapper>
          <Label> Рейтинг </Label>
          <SelectContainer>
            <Select name='rating' value={`${filters.ratingFrom}-${filters.ratingTo}`} onChange={handleFilterChange}>
              <option value='0-5'>Не важен</option>
              {/* Add more rating options */}
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
