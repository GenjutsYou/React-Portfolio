import React from 'react';

const navStyle = {
  padding: '0.5rem',
  border: '1px solid white',
};

const linkStyle = {
  margin: '0 1rem',
  textDecoration: 'none',
};

const Navigation = ({ onSectionChange, currentSection }) => {
  const handleLinkClick = (section) => {
    onSectionChange(section);
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>
          <button
            style={{
              ...linkStyle,
              color: currentSection === 'AboutMe' ? 'darkred' : 'inherit',
            }}
            onClick={() => handleLinkClick('AboutMe')}
          >
            About Me
          </button>
          <button
            style={{
              ...linkStyle,
              color: currentSection === 'Portfolio' ? 'darkred' : 'inherit',
            }}
            onClick={() => handleLinkClick('Portfolio')}
          >
            Portfolio
          </button>
          <button
            style={{
              ...linkStyle,
              color: currentSection === 'Contact' ? 'darkred' : 'inherit',
            }}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </button>
          <button
            style={{
              ...linkStyle,
              color: currentSection === 'Resume' ? 'darkred' : 'inherit',
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
