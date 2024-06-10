import React from 'react';
import './Home.css'
import Menu from '../../components/Menu';
import { AppContainer, AppSection, StyledH1, PresentationImage } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Home = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection alignConf='row'>
        <div className='presentation-container'>
          <StyledH1 color='#CDB5D1'>Crie salas de batalhas</StyledH1>
        </div>
        <div className='image-container'>
          <PresentationImage theme={defaultTheme} />
        </div>        
      </AppSection>
    </AppContainer>
  );
};

export default Home;