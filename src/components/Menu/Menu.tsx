import React from 'react';
import './Menu.css';
import { StyledButton } from '../StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
        <StyledButton theme={defaultTheme} onClick={() => console.log('Login button clicked')}>Login</StyledButton>
      </div>
    </nav>
  );
};

export default Menu;
