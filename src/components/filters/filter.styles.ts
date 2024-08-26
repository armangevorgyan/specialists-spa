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


const Select = styled.select<{ $mr?: string, $ml?: string }>`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 52px;
    margin-right: ${({$mr}) => $mr || 0};
    margin-left: ${({$ml}) => $ml || 0};
    
`;
const Option = styled.option`
    display: flex;
    height: 40px;
    font-size: 18px;
    padding: 20px;
    color: #000;
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
  Select,
  Option
}
