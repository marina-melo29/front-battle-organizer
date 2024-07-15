import React from 'react';
import Menu from '../../components/Menu';
import { AppContainer, AppSection, Footer } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Battle = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='row'>

      </AppSection>
      <Footer theme={defaultTheme}/>
    </AppContainer>
  );
};

export default Battle;