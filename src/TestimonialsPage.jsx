// src/TestimonialsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaStar } from 'react-icons/fa';
import Header from './components/Header'; // IMPORT THE NEW HEADER
import './TestimonialsPage.css';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page-wrapper">
      <Header theme="dark" /> {/* Use the new header with the dark theme */}
      <main className="container">
        {/* ... (Keep the rest of the testimonials page content here) ... */}
        <div className="testimonial-content-container">
          <FaStar className="testimonial-icon" />
          <h1>
            Be the First to Share <span className="highlight-blue">Your Success</span>
          </h1>
          <p>
            Agent Optimus is new, and our clients are already getting amazing results.
            We're preparing our first case studies for publication. Yours could be the first testimonial featured here!
          </p>
          <Link to="/#trial" className="testimonial-cta">
            <FaRocket /> Become a Success Story
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TestimonialsPage;