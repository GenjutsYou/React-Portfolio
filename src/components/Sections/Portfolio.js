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
    githubLink: 'https://github.com/GenjutsYou/anime-trivia-web-game',
    skill: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Handlebars.js'],
    skillLink: ['https://nodejs.org/en/', 'https://expressjs.com/', 'https://www.mysql.com/', 'https://sequelize.org/', 'https://handlebarsjs.com/']
  },
  {
    title: 'Work Day Scheduler',
    image: require('../../assets/images/Scheduler.jpg'),
    description: ' Daily Planner ',
    deployedLink: 'https://genjutsyou.github.io/Work-Day-Scheduler/',
    githubLink: 'https://github.com/GenjutsYou/Work-Day-Scheduler',
    skill: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Day.js'],
    skillLink: ['https://www.w3schools.com/html/', 'https://www.w3schools.com/css/', 'https://www.javascript.com/', 'https://jquery.com/', 'https://day.js.org/']
  },
  {
    title: 'Weather Dashboard',
    image: require('../../assets/images/weather.jpg'),
    description: ' Monitor Climates ',
    deployedLink: 'https://genjutsyou.github.io/weather-dashboard/',
    githubLink: 'https://github.com/GenjutsYou/weather-dashboard',
    skill: ['HTML', 'CSS', 'JavaScript','OpenWeather API'],
    skillLink: ['https://www.w3schools.com/html/', 'https://www.w3schools.com/css/', 'https://www.javascript.com/', 'https://openweathermap.org/forecast5']
  },
  {
    title: 'Note Taker',
    image: require('../../assets/images/notes.jpg'),
    description: ' Daily Log ',
    deployedLink: 'https://note-taker-arun-6d187129a3c0.herokuapp.com/',
    githubLink: 'https://github.com/GenjutsYou/Note-Taker',
    skill: ['Express.js', 'Node.js', 'JSON', 'Heroku'],
    skillLink: ['https://expressjs.com/', 'https://nodejs.org/en/', 'https://www.json.org/json-en.html', 'https://www.heroku.com/']
  },
  {
    title: 'Password Generator',
    image: require('../../assets/images/generator.jpg'),
    description: ' Generated Passwords ',
    deployedLink: 'https://genjutsyou.github.io/Password-Generator/',
    githubLink: 'https://github.com/GenjutsYou/Password-Generator',
    skill: ['HTML', 'CSS', 'JavaScript'],
    skillLink: ['https://www.w3schools.com/html/', 'https://www.w3schools.com/css/', 'https://www.javascript.com/']
  },
  {
    title: 'Regex Tutorial',
    image: require('../../assets/images/gist.jpg'),
    description: ' GitHub Gist ',
    deployedLink: 'https://gist.github.com/GenjutsYou/b01991f23a531032dd3ba34019a13821',
    githubLink: 'https://github.com/GenjutsYou/CS-Regex',
    skill: ['Regex', 'GitHub', 'Gist', 'Markdown'],
    skillLink: ['https://www.regular-expressions.info/tutorial.html', 'https://github.com','https://gist.github.com/', 'https://www.markdownguide.org/']
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
