import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

const Info = styled.div`
    padding: 10px;
`;

const Name = styled.h3`
    margin: 0;
    font-size: 18px;
`;

const Subjects = styled.p`
    color: #666;
    font-size: 14px;
`;

const Rating = styled.div`
    display: flex;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 44px;
    height: 36px;
    padding: 8px 4px;
    border-radius: 2px;
    background-color: #FFFFFF;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

`;

const RatingTitle = styled.span`
    font-size: 8px;
    font-weight: 500;
`;

const RatingNumber = styled.span<{fontSize?: number}>`
    font-size:${({fontSize}) => fontSize || 16}px;
    font-weight: 500;
`;
export {
  Card,
  Info,
  Name,
  Subjects,
  Rating,
  RatingTitle,
  RatingNumber
};
