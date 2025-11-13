import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="small-container" style={{ marginTop: '40px' }}>
        <h1>About NaveenStore</h1>
        <p>
          NaveenStore is your one-stop shop for the latest and greatest in fashion
          and lifestyle products. Our mission is to provide high-quality products
          at affordable prices, with a focus on customer satisfaction and a
          seamless shopping experience.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2018, NaveenStore has quickly grown to become a trusted name in
          online retail. We believe in making style accessible to everyone,
          everywhere.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have questions? Visit our <Link to="/contact">Contact</Link> page or
          email us at
          <a href="mailto:support@NaveenStore.com">support@NaveenStore.com</a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;