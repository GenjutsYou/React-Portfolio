import React from 'react';

const navStyle = {
  padding: '5px',
  border: '1px solid white',
};

const hStyle = {
  marginTop: '2rem'
};

const linkStyle = {
  margin: '0 .5rem',
  fontSize: '1rem',
  textDecoration: 'none',
};

const buttonStyle = {
  margin: '0 1rem',
  fontSize: '1rem',
  textDecoration: 'none',
};

const Navigation = ({ onSectionChange, currentSection }) => {
  const handleLinkClick = (section) => {
    onSectionChange(section);
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 style={hStyle}>
          <button
            className="button"
            style={{
              ...linkStyle,
              color: currentSection === 'AboutMe' ? 'red' : 'inherit',
            }}
            onClick={() => handleLinkClick('AboutMe')}
          >
            About
          </button>
          <button
            className="button"
            style={{
              ...linkStyle,
              color: currentSection === 'Portfolio' ? 'red' : 'inherit',
            }}
            onClick={() => handleLinkClick('Portfolio')}
          >
            Portfolio
          </button>
          <button
            className="button"
            style={{
              ...linkStyle,
              color: currentSection === 'Contact' ? 'red' : 'inherit',
            }}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </button>
          <button
            className="button"
            style={{
              ...linkStyle,
              color: currentSection === 'Resume' ? 'red' : 'inherit',
            }}
            onClick={() => handleLinkClick('Resume')}
          >
            Resume
          </button>
        </h2>
      </div>
    </nav>
  );
};

export default Navigation;
