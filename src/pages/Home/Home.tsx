import React from 'react';
import Menu from '../../components/Menu';
import { AppContainer } from '../../components/StyledComponents';
import { AppSection } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';


const Home = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection />
    </AppContainer>
  );
};

export default Home;