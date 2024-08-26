import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        padding-bottom: 24px;

    }
    
    &.border-bottom {
        border-bottom: 1px solid #CCCCCC;
        margin-bottom: 24px;
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

    .search-label {
        display: none;

        @media (min-width: 768px) {
            display: flex;
        };
    }
`;
const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Label = styled.div<{ fontWeight?: number, fontSize?: number, $mb?: string }>`
    display: flex;
    align-items: center;
    color: #000;
    margin-right: 12px;
    height: 27px;
    margin-bottom: ${({$mb}) => $mb || 12}px;
    font-weight: ${({fontWeight}) => fontWeight || 700};
    font-size: ${({fontSize}) => fontSize || 18}px;
`;

const AgeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
        max-width: 156px;
    }
`
const Button = styled.button`
    background-color: #FF006B;
    color: white;
    border: none;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    border-radius: 2px;
    padding: 16px 38px;
    cursor: pointer;
    height: 52px;
    width: 100%;
    
    &:hover {
        background-color: #E0005E; // Slightly darker shade for hover
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:active {
        background-color: #D00056; // Even darker for active state
        transform: translateY(1px); // Slight push down effect
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 0, 107, 0.5); // Focus ring
    }

    &:focus:not(:focus-visible) {
        box-shadow: none; // Remove focus ring for mouse users
    }

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(255, 0, 107, 0.5); // Keep focus ring for keyboard users
    }
    
    @media (min-width: 768px) {
        max-width: 312px;
    }
`;

export {
  FilterContainer,
  SelectContainer,
  FilterWrapper,
  Button,
  Label,
  AgeContainer
}
