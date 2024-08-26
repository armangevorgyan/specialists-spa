import React, { useState } from 'react';
import { Specialist } from '../../../types/types.ts';
import { Card, Info, Name, Rating, RatingNumber, RatingTitle, Subjects } from './specialistCard.styles.ts';
import SpecialistModal from '../SpecialistModal/SpecialistModal.tsx';
import SpecialistAvatar from '../../shared/SpecialistImage/SpecialistAvatar.tsx';


interface Props {
  specialist: Specialist;
}

const SpecialistCard: React.FC<Props> = ({specialist}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)}>
        <SpecialistAvatar specialist={specialist}/>
        <Rating>
          <RatingTitle>РЕЙТИНГ</RatingTitle>
          <RatingNumber fontSize={specialist.rating > 0 ? 24 : 16}>{specialist.rating > 0 ? specialist.rating : 'NEW'}</RatingNumber>
        </Rating>
        <Info>
          <Name>{specialist.name}, {specialist.age}</Name>
          <Subjects>{specialist.defaultSubjectName} и еще {specialist.subjectsCount} темы</Subjects>
        </Info>
      </Card>
      {isModalOpen && (
        <SpecialistModal specialist={specialist} onClose={() => setIsModalOpen(false)}/>
      )}
    </>
  );
};

export default SpecialistCard;
