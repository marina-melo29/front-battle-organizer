import React, { useState } from 'react';
import './Menu.css';
import defaultTheme from '../../themes/defaultTheme';
import { useNavigate } from 'react-router-dom';
import { SeeMoreBtn, MenuButton, ExpandedBtnDiv, ExpandedLinks } from './StyledComponents';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleProfileClick = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
      { isAuthenticated ? (
          <>
            <SeeMoreBtn theme={defaultTheme} onClick={handleProfileClick} />
            <ExpandedBtnDiv hide={!isExpanded}>
              <ExpandedLinks onClick={() => navigate('/')}>Perfil</ExpandedLinks>
              {/* <ExpandedLinks onClick={() => navigate('/')}>Settings</ExpandedLinks> */}
              <ExpandedLinks onClick={() => navigate('/')}>Sair</ExpandedLinks>
            </ExpandedBtnDiv>
          </>
        ) : (
          <>
            <MenuButton theme={defaultTheme} onClick={handleLoginClick}>
              Entrar
            </MenuButton>
            <MenuButton theme={defaultTheme} onClick={handleSignUpClick}>
              Cadastrar
            </MenuButton>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;
