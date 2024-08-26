import React from 'react';
import Filters from '../components/filters/Filters.tsx';
import SpecialistList from '../components/specialists/SpecialistList/SpecialistList.tsx';
import logo from '/logo.svg';
import { HomeContainer, Logo } from './home.styles.ts';


const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Logo src={logo} alt='logo'/>
      <Filters/>
      <SpecialistList/>
    </HomeContainer>
  );
};

export default Home;
