import React from 'react';
import logoWhite from '/images/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-2">
            <img src={logoWhite} alt="RajStore Logo" />
            <p>
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        {/* <p className="copyright">Copyright 2020 - Samwit Adhikary</p> */}
      </div>
    </div>
  );
};

export default Footer;