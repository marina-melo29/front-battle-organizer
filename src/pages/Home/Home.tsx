import React from 'react';
import './Home.css'
import Menu from '../../components/Menu';
import { AppContainer, AppSection, StyledH1, StyledH3, PresentationImage, StyledButton, Footer } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Home = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection alignConf='row'>
        <div className='presentation-container'>
          <StyledH1 color='#CDB5D1'>Crie salas de batalhas</StyledH1>
          <StyledH3 color='#CDB5D1'>Monstros, NPCs</StyledH3>
          <StyledH3 color='#CDB5D1'>E muito mais</StyledH3>

          {/* to do: login condition */}
          <StyledButton theme={defaultTheme}>COMEÇAR</StyledButton>
        </div>
        <div className='image-container'>
          <PresentationImage theme={defaultTheme} />
        </div>        
      </AppSection>
      <Footer theme={defaultTheme}/>
    </AppContainer>
  );
};

export default Home;