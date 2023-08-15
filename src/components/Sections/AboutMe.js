import React, { useState, useEffect } from 'react';

const aboutStyle = {
  padding: '1rem',
  lineHeight: '2rem',
  fontSize: '1.5rem'
};

const initialTextSections = [
  "Welcome to my professional portfolio website!",
  "My name is Arun Mundackal. I am a dedicated developer currently enrolled in a comprehensive fullstack coding bootcamp at the University of Arizona. I have a passion for building dynamic web applications using a wide array of technologies, including HTML, CSS, and JavaScript. In addition to my web development expertise, I am also deeply fascinated by the realms of game development and artificial intelligence. I am actively pursuing opportunities to expand my knowledge and skills in these areas, as I believe they hold immense potential for innovation and creativity. ",
  "I invite you to explore my portfolio, where I showcase my proficiency in creating innovative and user-friendly web solutions. It is my goal to provide engaging and seamless experiences for users through my work.",
  "If you have any questions or would like to discuss potential opportunities, please feel free to reach out. I am always eager to connect and collaborate!",
  "Thank you for visiting!"
];

const AboutMe = () => {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentParagraph = initialTextSections[paragraphIndex];

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex === currentParagraph.length) {
        // clearInterval(typingInterval);
        setIsTyping(false);
      } else {
        setTypedText(currentParagraph.slice(0, charIndex + 1));
        charIndex++;
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [currentParagraph]);

  useEffect(() => {
    if (!isTyping && paragraphIndex < initialTextSections.length - 1) {
      setTimeout(() => {
        setIsTyping(true);
        setParagraphIndex(paragraphIndex + 1);
      }, 1000); // Wait for 1 second before typing next paragraph
    }
  }, [isTyping, paragraphIndex]);

  const h1Style = {
    marginTop: '1rem',
    marginBottom: '3rem',
  };

  const h2Style = {
    marginTop: '1rem',
    marginBottom: '3rem',
  };

  const pStyle = {
    marginBottom: '5rem',
  };

  return (
    <section style={aboutStyle}>
      <h1 style={h1Style}>About Me</h1>
      <h2 style={h2Style}>
        <img src={require('../../assets/images/avatar.jpg')} alt="Avatar" style={{ maxWidth: '100px', marginRight: '50px' }} />
        Arun Mundackal
      </h2>
      <div className="about-me">
        {/* <img src="akatsuki.jpg" alt="Avatar" style={{ maxWidth: '100%', marginBottom: '1rem' }} /> */}
        <p style={pStyle}>{typedText}</p>
        {isTyping} {/* Blinking cursor */}
      </div>
    </section>
  );
};

export default AboutMe;
