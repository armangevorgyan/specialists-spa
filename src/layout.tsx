import styled from 'styled-components';

export const Layout = styled.div`
    max-width: 1056px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;
