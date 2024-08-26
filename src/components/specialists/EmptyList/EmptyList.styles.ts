import styled from 'styled-components';


const EmptyListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 15vh;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;

    @media (min-width: 768px) {
        height: 160px;
        width: 160px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    max-width: 264px;
`;

export {
  EmptyListContainer,
  Image,
  Description
};
