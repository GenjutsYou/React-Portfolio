import React from 'react';

const footerStyle = {
  textAlign: 'center',
  padding: '3px',
  border: '1px solid white'
};

const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: '1px',
};

const PStyle = {
  marginTop: '1px',
  marginBottom: '0',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <div style={divStyle}>
          <a href="mailto:arunmundackal7@gmail.com">
            <img
              src={require('../assets/images/gmail.jpg')}
              alt="Icon"
              className="icon-image"
            />
          </a>
          <a href="https://github.com/GenjutsYou">
            <img
              src={require('../assets/images/github.jpg')}
              alt="Icon"
              className="icon-image"
            />
          </a>
          <a href="https://www.linkedin.com/in/arun-mundackal/">
            <img
              src={require('../assets/images/linkedin.jpg')}
              alt="Icon"
              className="icon-image"
            />
          </a>
        </div>
        <p style={PStyle}>&copy; 2023 GenjutsYou's Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
