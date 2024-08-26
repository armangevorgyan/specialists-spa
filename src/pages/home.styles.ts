import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Logo = styled.img`
    margin-top: 0;
    height: 45px;
    @media (min-width: 768px) {
        align-self: flex-start;
    }
`;

export {
  HomeContainer,
  Logo
};
