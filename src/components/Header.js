import React from 'react';
import Navigation from './Navigation';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  height: '7rem',
  textAlign: 'center',
  borderBottom: '1px solid white'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      {/* <h1>Developer's Portfolio</h1> */}
    </header>    
  );
};

export default Header;
