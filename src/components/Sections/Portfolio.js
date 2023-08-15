import React from 'react';
import Project from '../Project';

const portfolioStyle = {
  padding: '2rem',
  margin: '2rem',
};

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    deployedLink: 'https://project1.com',
    githubLink: 'https://github.com/project1'
  },
  // Add more projects...
];

const Portfolio = () => {
  return (
    <section style={portfolioStyle}>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
