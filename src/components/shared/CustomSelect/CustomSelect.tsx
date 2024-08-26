import React, { useState, useRef, useEffect } from 'react';
import { CustomSelectWrapper, OptionsContainer, StyledSelect, Option } from './customSelect.styles.ts';

interface OptionType<T, M> {
  value: T;
  label: M;
}

interface CustomSelectProps {
  options: OptionType<string, string>[];
  value: string | undefined;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  placeholder?: string;
  mr?: number;
  ml?: number;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  name,
  placeholder = 'Select an option',
  mr,
  ml
}) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue
      }
    });
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <CustomSelectWrapper ref={selectRef} $mr={mr} $ml={ml}>
      <StyledSelect onClick={handleToggle} className={isOpen ? 'isOpen' : 'isClosed'}>
        {selectedOption ? selectedOption.label : placeholder}
      </StyledSelect>
      <OptionsContainer $isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className='filterOption'
          >
            {option.label}
          </Option>
        ))}
      </OptionsContainer>
    </CustomSelectWrapper>
  );
};

export default CustomSelect;
