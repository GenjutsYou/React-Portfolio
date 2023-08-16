import React from 'react';

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
      {/* <img src={require('../assets/images/akatsukicloud.jpg')} alt="Avatar" style={{ maxWidth: '100px', marginRight: '50px' }} />
        Arun Mundackal */}
    </header>    
  );
};

export default Header;
