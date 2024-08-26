import styled from 'styled-components';

const Image = styled.img<{height?: number}>`
    width: 100%;
    height: ${({height}) => height || 200}px;
    object-fit: cover;
`;

export default Image;
