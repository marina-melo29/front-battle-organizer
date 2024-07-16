import React from 'react';
import Menu from '../../components/Menu';
import './Battle.css';
import { AppContainer, AppSection, Footer } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Battle = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='column'>
        <div className='battle-container'>

        </div>
      </AppSection>
      <Footer theme={defaultTheme} className='footer' />
    </AppContainer>
  );
};

export default Battle;