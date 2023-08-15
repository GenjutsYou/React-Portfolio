import React, { useState } from 'react';

const contactStyle = {
  padding: '1rem',
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
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        {formError && <p style={errorStyle}>{formError}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
