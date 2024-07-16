import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import defaultTheme from '../../themes/defaultTheme';
import { useNavigate } from 'react-router-dom';
import { SeeMoreBtn, MenuButton, ExpandedBtnDiv, ExpandedLinks } from './StyledComponents';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../services/userService';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.closest('.expanded-btn-div') === null
              && target.closest('.see-more') === null) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    if (await logout()) {
      setIsAuthenticated(false);
      navigate('/');
    }
  };

  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2 onClick={() => navigate('/')}>Battle Organizer</h2>
      </div>
      <div className="menu-links">
      { isAuthenticated ? (
          <>
            <SeeMoreBtn theme={defaultTheme} onClick={handleMenuClick} className='see-more' />
            <ExpandedBtnDiv hide={!isExpanded} className='expanded-btn-div' onClick={handleMenuClick}>
              <ExpandedLinks onClick={() => navigate('/')}>Perfil</ExpandedLinks>
              {/* <ExpandedLinks onClick={() => navigate('/')}>Settings</ExpandedLinks> */}
              <ExpandedLinks onClick={handleLogout}>Sair</ExpandedLinks>
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
