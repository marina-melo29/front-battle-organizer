import React from 'react';
import './Menu.css';
import Button from '../Button';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Battle Organizer</h2>
      </div>
      <div className="menu-links">
        <Button onClick={() => console.log('Login button clicked')}>Login</Button>
      </div>
    </nav>
  );
};

export default Menu;
