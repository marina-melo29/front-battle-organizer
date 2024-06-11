import React from 'react';
import './Menu.css';
import { MenuButton } from '../StyledComponents';
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
        <MenuButton theme={defaultTheme} onClick={handleLoginClick}>Login</MenuButton>
      </div>
    </nav>
  );
};

export default Menu;
