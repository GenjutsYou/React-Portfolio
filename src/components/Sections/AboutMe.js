import React from 'react';

const aboutStyle = {
  padding: '1rem',
  border: '1px solid black'
};

const AboutMe = () => {
  return (
    <section style={aboutStyle}>
      <div className="about-me">
      <h2>About Me</h2>
      <img src="avatar.jpg" alt="Avatar" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
      <p>About me...</p>
      </div>
    </section>
  );
};

export default AboutMe;
