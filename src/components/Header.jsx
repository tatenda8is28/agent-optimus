// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Header.css';

const Header = ({ theme = 'dark' }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (isNavOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Agent Optimus Logo" className="logo-image" />
        </Link>
        <nav className="header-nav">
          <ul className={isNavOpen ? 'nav-open' : ''}>
            <li><Link to="/pricing" className="nav-link" onClick={() => setIsNavOpen(false)}>Pricing</Link></li>
            <li><Link to="/testimonials" className="nav-link" onClick={() => setIsNavOpen(false)}>Testimonials</Link></li>
            <li><Link to="/case-studies" className="nav-link" onClick={() => setIsNavOpen(false)}>Case Studies</Link></li>
            <li className="mobile-cta-item">
              {/* Updated Link */}
              <Link to="/book" className="nav-link-cta" onClick={() => setIsNavOpen(false)}>Book a Demo</Link>
            </li>
          </ul>
          {/* Updated Link */}
          <Link to="/book" className="header-cta">Book a Demo</Link>
          <button className="mobile-nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;