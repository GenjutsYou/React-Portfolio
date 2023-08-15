import React from 'react';

const footerStyle = {
  textAlign: 'center',
  border: '1px solid white'
};

const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: '0',
};

const PStyle = {
  marginBottom: '0',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
      <div style={divStyle}>
				  <a href="mailto:arunmundackal7@gmail.com">
          <img src={require('../assets/images/gmail.jpg')} alt="Avatar" style={{ maxWidth: '50px', marginHeight: '50px', marginRight: '30px' }} />
				  </a>
				  <a href="https://github.com/GenjutsYou">
          <img src={require('../assets/images/github.jpg')} alt="Avatar" style={{ maxWidth: '50px', marginHeight: '50px', marginRight: '30px' }} />
				  </a>
				  <a href="https://www.linkedin.com/in/arun-mundackal/">
          <img src={require('../assets/images/linkedin.jpg')} alt="Avatar" style={{ maxWidth: '50px', marginHeight: '50px', marginRight: '10px' }} />
				  </a>
				</div>
      <p style={PStyle}>&copy; 2023 GenjutsYou's Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
