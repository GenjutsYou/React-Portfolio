import React from 'react';

const projectStyle = {
  padding: '1rem',
  marginBottom: '1rem',
};

const projectAppStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  textAlign: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  textAlign: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: '1px solid white',
};

const imageStyle = {
  maxWidth: '250px',
  maxHeight: '300px',
  border: '1px solid white',
};

const PStyle = {
  fontSize: '15px',
};

const Project = ({ title, image, description, deployedLink, githubLink }) => {
  return (
    <div style={projectStyle}>
      <div style={projectAppStyle}>
      <div style={appContainerStyle}>
      <h3>{title}</h3>
      <img src={image} alt={`${title} Preview`} style={imageStyle} />
      <p style={PStyle}>{description}</p>
      <a href={deployedLink}>View App</a>
      <a href={githubLink}>GitHub Repo</a>
      </div>
      </div>
    </div>
    
  );
};

export default Project;
