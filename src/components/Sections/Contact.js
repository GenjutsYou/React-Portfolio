import React, { useState, useEffect } from 'react';

const contactStyle = {
  padding: '1rem',
  textAlign: 'center',
  alignItems: 'center',
};

const h1Style = {
  marginTop: '1rem',
  marginBottom: '1rem',
};

const h2Style = {
  marginTop: '1rem',
  marginBottom: '3rem',
};

const pStyle = {
  marginBottom: '2rem',
};

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  textAlign: 'center',
  alignItems: 'center',
};

const inputContainerStyle = {
  marginBottom: '2rem',
};

const labelStyle = {
  marginBottom: '3rem',
};

const inputStyle = {
  padding: '0.5rem',
  width: '100%',
};

const formStyle = {
  padding: '2rem',
  border: '1px solid white'
};

const errorStyle = {
  color: 'red'
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormError('All fields are required.');
    } else {
      // Handle form submission
      setFormError('');
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    <section style={contactStyle}>
      <h1 style={h1Style}>
        Contact
      </h1>
      <p>
      <div style={contactStyle}>
      <p>Feel free to reach out with any questions, inquiries, or opportunities you may have! </p>
				<div style={divStyle}>
				  <a href="mailto:arunmundackal7@gmail.com">
					<img class="hover-image" src="https://img.shields.io/badge/@arunmundackal7-white" alt="@arunmundackal7@gmail.com" />
				  </a>
				  <a href="https://github.com/GenjutsYou">
					<img class="hover-image" src="https://img.shields.io/badge/GitHub-white" alt="GitHub" />
				  </a>
				  <a href="https://www.linkedin.com/in/arun-mundackal/">
					<img class="hover-image" src="https://img.shields.io/badge/LinkedIn-white" alt="LinkedIn" />
				  </a>
				</div>
        </div>
      </p> 
      <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={h2Style}>
        Send a message:
      </h2>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
          />
        </div>
        {formError && <p style={errorStyle}>{formError}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
