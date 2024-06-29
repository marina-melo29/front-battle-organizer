import React, { useEffect, useState } from 'react';
import './Menu.css';
import defaultTheme from '../../themes/defaultTheme';
import { useNavigate } from 'react-router-dom';
import { SeeMoreBtn, MenuButton, ExpandedBtnDiv, ExpandedLinks } from './StyledComponents'

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const isAuthenticated = async () => {
    const token = localStorage.getItem('authToken');
    const path = 'http://localhost:3000/is_authenticated';

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    return response.ok;
  };

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      setAuthenticated(auth);
    };
    checkAuth();
  }, []);

  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
      { authenticated ? (
          <>
            <SeeMoreBtn theme={defaultTheme} onClick={handleProfileClick} />
            <ExpandedBtnDiv hide={!isExpanded}>
              {/* TODO: acrescentar os paths */}
              <ExpandedLinks onClick={() => navigate('/')}>Perfil</ExpandedLinks>
              {/* <ExpandedLinks onClick={() => navigate('/')}>Settings</ExpandedLinks> */}
              <ExpandedLinks onClick={() => navigate('/')}>Sair</ExpandedLinks>
            </ExpandedBtnDiv>
          </>
        ) : (
          <MenuButton theme={defaultTheme} onClick={handleLoginClick}>
            Login
          </MenuButton>
        )} 
      </div>
    </nav>
  );
};

export default Menu;
