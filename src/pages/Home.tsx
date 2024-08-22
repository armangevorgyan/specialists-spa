import React from 'react';
import Filters from '../components/filters/Filters.tsx';
import SpecialistList from '../components/specialists/SpecialistList.tsx';

import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Specialists</h1>
      <Filters/>
      <SpecialistList/>
    </HomeContainer>
  );
};

export default Home;
