import React from 'react';
import Navigation from './Navigation';

const headerStyle = {
  padding: '1rem',
  textAlign: 'center',
  border: '1px solid black'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Developer's Portfolio</h1>
    </header>
  );
};

export default Header;
