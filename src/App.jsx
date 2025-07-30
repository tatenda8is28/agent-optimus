// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PricingPage from './PricingPage';
import TestimonialsPage from './TestimonialsPage';
import CaseStudyPage from './CaseStudyPage';
import BookingPage from './BookingPage'; // Import the new page

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/case-studies" element={<CaseStudyPage />} />
      <Route path="/book" element={<BookingPage />} /> {/* Add the new route */}
    </Routes>
  );
}

export default App;