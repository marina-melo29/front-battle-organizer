import React from 'react';
import './Menu.css';
import { StyledButton } from '../StyledComponents';
import defaultTheme from '../../themes/defaultTheme';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
        <StyledButton theme={defaultTheme} onClick={handleLoginClick}>Login</StyledButton>
      </div>
    </nav>
  );
};

export default Menu;
