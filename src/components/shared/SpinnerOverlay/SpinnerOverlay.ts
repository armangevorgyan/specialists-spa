import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #FF006B;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 1s linear infinite;
`;

const SpinnerOverlay = styled.div<{ $isLoading: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(197, 197, 197, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.$isLoading ? 1 : 0};
    visibility: ${props => props.$isLoading ? 'visible' : 'hidden'};
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 1;
`;

export {
  SpinnerOverlay,
  Spinner
};
