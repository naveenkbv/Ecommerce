import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    // In a real application, you would send the form data to a backend.
    e.target.reset(); // Clear the form
  };

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="small-container" style={{ marginTop: '40px', maxWidth: '600px' }}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
            required
          />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="5"
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
            required
          ></textarea>
          <br />
          <button type="submit" className="btn" style={{ padding: '10px 30px' }}>
            Send
          </button>
        </form>
        <p style={{ marginTop: '30px' }}>
          Or email us at
          <a href="mailto:support@NaveenStore.com">support@NaveenStore.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;