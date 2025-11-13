import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';
import cartIcon from '/images/cart.png';
import menuIcon from '/images/menu.png';
import userIcon from '/images/user-1.png'; // Assuming user-1.png is for the profile

const Navbar = ({ loggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);

  const menutoggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfilePopup = (e) => {
    e.preventDefault();
    setProfilePopupOpen(!profilePopupOpen);
  };

  const handleSignOut = () => {
    // In a real app, you'd clear authentication tokens/session here
    window.location.href = '/'; // Redirect to home page (not logged in)
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="125px" />
        </Link>
      </div>
      <nav>
        <ul id="MenuItems" style={{ maxHeight: menuOpen ? '200px' : '0px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
      <Link to="/cart">
        <img src={cartIcon} width="30px" height="30px" alt="Cart" />
      </Link>

      {loggedIn && (
        <a
          href="#"
          className="profile-link"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '15px',
          }}
          onClick={toggleProfilePopup}
        >
          <img
            src={userIcon}
            alt="Profile"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ff523b',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
              background: '#fff',
            }}
          />
        </a>
      )}

      {loggedIn && profilePopupOpen && (
        <div
          id="profile-popup"
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '32px 32px 24px 32px',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
              minWidth: '220px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <button
              id="signout-btn"
              onClick={handleSignOut}
              style={{
                background: '#ff523b',
                color: '#fff',
                border: 'none',
                padding: '10px 32px',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Sign out
            </button>
            <br />
            <button
              id="close-popup"
              onClick={toggleProfilePopup}
              style={{
                background: 'none',
                border: 'none',
                position: 'absolute',
                top: '8px',
                right: '12px',
                fontSize: '22px',
                cursor: 'pointer',
                color: '#888',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={menutoggle} />
    </div>
  );
};

export default Navbar;