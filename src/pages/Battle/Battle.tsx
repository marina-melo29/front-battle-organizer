import React from 'react';
import Menu from '../../components/Menu';
import './Battle.css';
import { AppContainer, AppSection, Footer } from '../../components/StyledComponents';
import OrderingCard from '../../components/Battle/OrderingCard';
import defaultTheme from '../../themes/defaultTheme';

const Battle = () => {
  return (
    <AppContainer theme={defaultTheme}>
      <Menu />
      <AppSection align_conf='column'>
        <div className='battle-container'>
          <OrderingCard>
            <div>Ordering Card</div>
            <div>Second Ordering Card</div>
            <div>Third Ordering Card</div>
            <div>Fourth Ordering Card</div>
          </OrderingCard>
        </div>
      </AppSection>
      <Footer theme={defaultTheme} className='footer' />
    </AppContainer>
  );
};

export default Battle;