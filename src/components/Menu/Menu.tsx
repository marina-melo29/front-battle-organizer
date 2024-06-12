import React from 'react';
import './Menu.css';
import defaultTheme from '../../themes/defaultTheme';
import { useNavigate } from 'react-router-dom';
import { SeeMoreBtn, MenuButton } from './StyledComponents'

const Menu = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };

  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
        {isAuthenticated() ? (
            <SeeMoreBtn theme={defaultTheme}/>
            /* Add other links here */
          ) : (            
            <MenuButton theme={defaultTheme} onClick={handleLoginClick}>
              Login
            </MenuButton>
          )
        }   
      </div>
    </nav>
  );
};

export default Menu;
