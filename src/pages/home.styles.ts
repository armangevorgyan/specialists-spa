import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Logo = styled.img`
    display: none;
    @media (min-width: 768px) {
        display: block; 
        margin-top: 0;
        height: 45px;
        align-self: flex-start;
    }
`;

export {
  HomeContainer,
  Logo
};
