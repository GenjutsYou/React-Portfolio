import React, { useState } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <nav style={navStyle}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>
            <NavLink
              to="/AboutMe"
              style={linkStyle}
              isActive={() => currentSection === 'AboutMe'}
              onClick={() => handleLinkClick('AboutMe')}
            >
              About Me
            </NavLink>
            <NavLink
              to="/Portfolio"
              style={linkStyle}
              isActive={() => currentSection === 'Portfolio'}
              onClick={() => handleLinkClick('Portfolio')}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/Contact"
              style={linkStyle}
              isActive={() => currentSection === 'Contact'}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </NavLink>
            <NavLink
              to="/Resume"
              style={linkStyle}
              isActive={() => currentSection === 'Resume'}
              onClick={() => handleLinkClick('Resume')}
            >
              Resume
            </NavLink>
          </h2>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navigation;
