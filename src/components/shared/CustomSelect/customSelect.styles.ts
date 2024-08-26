import styled from 'styled-components';

const CustomSelectWrapper = styled.div<{ $mr?: number, $ml?: number }>`
    position: relative;
    width: 100%;
    margin-right: ${({$mr}) => $mr || 0}px;
    margin-left: ${({$ml}) => $ml || 0}px;
`;

const StyledSelect = styled.div`
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 8px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: 500;
    font-size: 20px;

    &.isOpen:after {
        content: '▲';
        color: #e91e63;
        font-size: 12px;
    }

    &.isClosed:after {
        content: '▼';
        color: #e91e63;
        font-size: 12px;
    }


    @media (min-width: 768px) {
        height: 28px;
        padding: 12px;
    }
`;

const OptionsContainer = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1;
    display: ${props => props.$isOpen ? 'block' : 'none'};

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #d3cfcf;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #e91e63;
    }
`;

const Option = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000;
    padding: 8px;
    height: 24px;

    @media (min-width: 768px) {
        height: 28px;
        padding: 12px;
    }

    &:hover {
        background: rgba(233, 30, 99, 0.2);
    }
`;

export {
  CustomSelectWrapper,
  StyledSelect,
  OptionsContainer,
  Option
};
