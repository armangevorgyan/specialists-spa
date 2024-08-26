import React from 'react';
import { Specialist } from '../../../types/types.ts';
import SpecialistAvatar from '../../shared/SpecialistImage/SpecialistAvatar.tsx';
import { Circle, CloseButton, ModalContent, Overlay, Paragraph, Strong, Title } from './specialistModal.styles.ts';


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
        <Paragraph><Strong>Возраст:</Strong> {specialist.age}</Paragraph>
        <Paragraph><Strong>Рейтинг:</Strong> {specialist.rating}</Paragraph>
        <Paragraph><Strong>Диплом психолога:</Strong> {specialist.isCertified ? 'Да' : 'Нет'}</Paragraph>
        <Paragraph><Strong>Основная тема:</Strong> {specialist.defaultSubjectName}</Paragraph>
        <Paragraph><Strong>Другие темы:</Strong> {specialist.subjectsCount}</Paragraph>
        <Paragraph><Strong>Уровень:</Strong> {specialist.level === 1 ? 'Premium' : 'Basic'}</Paragraph>
        <Paragraph><Strong>Время последней активности:</Strong> {new Date(specialist.lastActivityTime).toLocaleString()}</Paragraph>
        <Paragraph><Strong>Статус онлайн:</Strong> {specialist.onlineStatus === 2 ? 'Online' : 'Offline'}
          <Circle $isActive={specialist.onlineStatus === 2}/> </Paragraph>
        <CloseButton onClick={onClose}>Закрыть</CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default SpecialistModal;
