import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
`;

const Title = styled.h2``;
const Paragraph = styled.p``;
const CloseButton = styled.button`
    display: block;
    max-width: 250px;
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
  ModalContent,
  Overlay,
  Title,
  Paragraph,
  CloseButton
}
