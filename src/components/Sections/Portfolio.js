import React from 'react';
import Project from '../Project';


const portfolioStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  alignItems: 'center',
  padding: '2rem',
  margin: '2rem',
};

const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  alignItems: 'center',
  padding: '2rem',
  margin: '2rem',
};

const projects = [
  {
    title: 'Anime Trivia',
    image: require('../../assets/images/anime.jpg'),
    description: ' Trivia Game ',
    deployedLink: 'https://anime-trivia-afe9a77ab61d.herokuapp.com/login',
    githubLink: 'https://github.com/GenjutsYou/anime-trivia-web-game'
  },
  {
    title: 'Work Day Scheduler',
    image: require('../../assets/images/Scheduler.jpg'),
    description: ' Daily Planner ',
    deployedLink: 'https://genjutsyou.github.io/Work-Day-Scheduler/',
    githubLink: 'https://github.com/GenjutsYou/Work-Day-Scheduler'
  },
  {
    title: 'Weather Dashboard',
    image: require('../../assets/images/weather.jpg'),
    description: ' Monitor Climates ',
    deployedLink: 'https://genjutsyou.github.io/weather-dashboard/',
    githubLink: 'https://github.com/GenjutsYou/weather-dashboard'
  },
  {
    title: 'Note Taker',
    image: require('../../assets/images/notes.jpg'),
    description: ' Daily Log ',
    deployedLink: 'https://note-taker-arun-6d187129a3c0.herokuapp.com/',
    githubLink: 'https://github.com/GenjutsYou/Note-Taker'
  },
  {
    title: 'Password Generator',
    image: require('../../assets/images/generator.jpg'),
    description: ' Generated Passwords ',
    deployedLink: 'https://project3.com',
    githubLink: 'https://github.com/project3'
  },
  {
    title: 'Regex Tutorial',
    image: require('../../assets/images/gist.jpg'),
    description: ' GitHub Gist ',
    deployedLink: 'https://gist.github.com/GenjutsYou/b01991f23a531032dd3ba34019a13821',
    githubLink: 'https://github.com/GenjutsYou/CS-Regex'
  },
];

const Portfolio = () => {
  return (
    <section style={portfolioStyle}>
      <h2>Portfolio</h2>
      <div style={divStyle}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      </div>
    </section>
  );
};

export default Portfolio;
