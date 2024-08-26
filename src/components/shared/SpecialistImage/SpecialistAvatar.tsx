import React from 'react';
import { Specialist } from '../../../types/types.ts';
import noImageWoman from '../../../../public/no_photo_woman.svg';
import noImageMan from '../../../../public/no_photo_man.svg';

import Image from './specialistAvatar.styles.ts';

interface SpecialistAvatarProps {
  specialist: Specialist;
  height?: number;
}

enum Sex {
  Male = 1,
  Female = 2
}

const SpecialistAvatar: React.FC<SpecialistAvatarProps> = ({
  specialist,
  height
}) => {
  if (!specialist.photoUrl) {
    return (
      <Image src={specialist.sex === Sex.Female ? noImageWoman : noImageMan} height={height} alt={specialist.name}></Image>
    );
  } else {
    return (
      <Image src={specialist.photoUrl} height={height} alt={specialist.name}/>
    );
  }
};

export default SpecialistAvatar;
