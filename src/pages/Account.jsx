import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';


import image1 from '/images/image1.png';

const Account = () => {
  const [isRegister, setIsRegister] = useState(false); // false = login view, true = register view
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Menu toggle function (exact logic from HTML)
  const menutoggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Form toggle functions (exact transform logic from HTML script, fixed for proper sliding)
  const handleLoginClick = () => {
    setIsRegister(false);
    // Mimic exact transforms: LoginForm to 0px, RegForm to 300px (off-screen right)
    // Indicator to translateX(0px)
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
    // Mimic exact transforms: RegForm to 0px, LoginForm to -300px (off-screen left, but using 300px right for consistency with CSS)
    // Indicator to translateX(100px)
  };

  // Login form submit (exact logic: prevent default, redirect to index2.html)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/index2.html'); // Redirect to logged-in home
  };

  // Register form submit (exact logic: no action, just prevent default to avoid page reload)
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // No further action, matching HTML
  };

  return (
    <>
    
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.png" alt="logo" width="125px" />
            </a>
          </div>
          <nav>
            <ul id="MenuItems" style={{ maxHeight: menuOpen ? '200px' : '0px' }}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
          </nav>
          <a href="/cart">
            <img src="/images/cart.png" width="30px" height="30px" alt="Cart" />
          </a>
          <img
            src="/images/menu.png"
            className="menu-icon"
            onClick={menutoggle}
            alt="Menu"
          />
        </div>
      </div>

      {/* Account Page - Exact structure and classes */}
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={image1} width="100%" alt="Account Image" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={handleLoginClick}>Login</span>
                  <span onClick={handleRegisterClick}>Register</span>
                  <hr
                    id="Indicator"
                    style={{
                      transform: isRegister ? 'translateX(100px)' : 'translateX(0px)',
                      transition: 'transform 1s',
                    }}
                  />
                </div>
                <form
                  id="LoginForm"
                  onSubmit={handleLoginSubmit}
                  style={{
                    position: 'absolute',
                    top: '130px',
                    transition: 'transform 1s',
                    transform: isRegister ? 'translateX(300px)' : 'translateX(0px)',
                  }}
                >
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <a href="">Forget Password</a>
                </form>

                <form
                  id="RegForm"
                  onSubmit={handleRegisterSubmit}
                  style={{
                    position: 'absolute',
                    top: '130px',
                    transition: 'transform 1s',
                    transform: isRegister ? 'translateX(0px)' : 'translateX(-300px)',
                  }}
                >
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Exact structure, with commented parts preserved in code but not rendered */}
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* Commented out in HTML, so not rendered */}
            <div className="footer-col-2">
              <img src="/images/logo.png" alt="NaveenStore Logo" />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            {/* Commented out in HTML, so not rendered */}
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
          {/* Commented out in HTML, so not rendered */}
        </div>
      </div>
      
    </>
  );
};

export default Account;