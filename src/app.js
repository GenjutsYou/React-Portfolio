import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/Sections/AboutMe';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';
import Resume from './components/Sections/Resume';
import './index.css';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe'); // Default section

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  let currentSectionComponent;

  switch (currentSection) {
    case 'AboutMe':
      currentSectionComponent = <AboutMe />;
      break;
    case 'Portfolio':
      currentSectionComponent = <Portfolio />;
      break;
    case 'Contact':
      currentSectionComponent = <Contact />;
      break;
    case 'Resume':
      currentSectionComponent = <Resume />;
      break;
    default:
      currentSectionComponent = <AboutMe />;
  }

  return (
    <div className="app">
      <Header />
      <Navigation onSectionChange={handleSectionChange} currentSection={currentSection} />
      {currentSectionComponent}
      <Footer />
    </div>
  );
}

export default App;
