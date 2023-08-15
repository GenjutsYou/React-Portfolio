import React from 'react';

const projectStyle = {
  padding: '1rem',
  marginBottom: '1rem',
};

const Project = ({ title, description, deployedLink, githubLink }) => {
  return (
    <div style={projectStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
