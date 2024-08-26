import styled from 'styled-components';


const ListContainer = styled.div`
    position: relative;
    @media (min-width: 768px) {
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

`;

export {
  ListContainer,
  Grid,
  ShowMoreButton
};
