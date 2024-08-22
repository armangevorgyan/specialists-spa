import React from 'react';
import styled from 'styled-components';
import { Specialist } from '../../types/types.ts';

interface Props {
  specialist: Specialist;
}

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
`;

const SpecialistCard: React.FC<Props> = ({specialist}) => {
  return (
    <Card>
      <h3>{specialist.name}</h3>
      <p>Age: {specialist.age}</p>
      <p>Rating: {specialist.rating}</p>
      <p>Subject: {specialist.defaultSubjectName}</p>
    </Card>
  );
};

export default SpecialistCard;
