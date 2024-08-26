import styled from 'styled-components';


const ListContainer = styled.div`
    display: block;
    width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #d3cfcf;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #e91e63;
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    overflow-y: auto;
`;


const ShowMoreButton = styled.button`
    display: block;
    max-width: 312px;
    width: 100%;
    margin: 20px auto;
    padding: 16px 68px;
    background-color: #e91e63;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`;

export {
  ListContainer,
  Grid,
  ShowMoreButton
};
