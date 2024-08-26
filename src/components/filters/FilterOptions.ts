import { FilterOptionsInterface } from '../../types/types.ts';

const ageFrom = 18;
const ageTo = 99;

const FilterOptions: FilterOptionsInterface = {
  sex: [
    {
      value: '',
      label: 'Любого пола'
    },
    {
      value: 1,
      label: 'Мужчина'
    },
    {
      value: 2,
      label: 'Женщина'
    }
  ],
  age: Array.from({length: ageTo - ageFrom + 1}, (_, i) => ({
    value: ageFrom + i,
    label: ageFrom + i
  })),
  profSpeciality: [
    {
      value: '',
      label: 'Все варианты'
    }, {
      value: 1,
      label: 'Консультант'
    },
    {
      value: 2,
      label: 'Сексолог'
    },
    {
      value: 3,
      label: 'Коуч'
    }
  ],
  ratingOptions: [
    {
      value: '0-100',
      label: 'Все'
    },
    {
      value: '0-0',
      label: 'Новые'
    },
    {
      value: '80-100',
      label: 'от 80 до 100'
    },
    {
      value: '60-79',
      label: 'от 60 до 79'
    },
    {
      value: '40-59',
      label: 'от 40 до 59'
    },
    {
      value: '20-39',
      label: 'от 20 до 39'
    },
    {
      value: '0-19',
      label: 'от 0 до 19'
    }
  ]
};

export {
  ageFrom,
  ageTo,
  FilterOptions
};
