import React from 'react';
import { Specialist } from '../../../types/types.ts';
import SpecialistAvatar from '../../shared/SpecialistImage/SpecialistAvatar.tsx';
import { CloseButton, ModalContent, Overlay, Paragraph, Title } from './specialistModal.styles.ts';


interface Props {
  specialist: Specialist;
  onClose: () => void;
}

const SpecialistModal: React.FC<Props> = ({
  specialist,
  onClose
}) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>{specialist.name}</Title>
        <SpecialistAvatar specialist={specialist} height={300}/>
        <Paragraph>Возраст: {specialist.age}</Paragraph>
        <Paragraph>Рейтинг: {specialist.rating}</Paragraph>
        <Paragraph>Основная тема: {specialist.defaultSubjectName}</Paragraph>
        <Paragraph>Другие темы: {specialist.subjectsCount}</Paragraph>
        <Paragraph>Статус онлайн: {specialist.onlineStatus === 2 ? 'Online' : 'Offline'}</Paragraph>
        <Paragraph>Уровень: {specialist.level === 1 ? 'Premium' : 'Basic'}</Paragraph>
        <CloseButton onClick={onClose}>Закрыть</CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default SpecialistModal;
