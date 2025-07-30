// src/PricingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Header from './components/Header'; // IMPORT THE NEW HEADER
import './PricingPage.css';

// ... (Keep your pricingData array here)
const pricingData = [
  {
    plan: 'Free Trial', price: 'R0', period: '/ 60 days', subtitle: 'No commitment, no credit card required.',
    features: ['Your own AI Chatbot', 'Custom Availability', 'Embed on WhatsApp', 'Customer Support'],
    buttonText: 'Get Started Free', isRecommended: false,
  },
  {
    plan: 'Individual Plan', price: 'R499', period: '/ month', subtitle: 'Billed annually, or R599 month-to-month.',
    features: ['Everything in Free Trial', 'Advanced Analytics', 'Custom Branding', 'Priority Support'],
    buttonText: 'Choose Individual', isRecommended: true,
  },
  {
    plan: 'Agency Plan', price: 'R1299', period: '/ month', subtitle: 'Billed annually for up to 5 agents.',
    features: ['Everything in Individual Plan', 'Team Features', 'Agent Performance Reports', 'Dedicated Account Manager'],
    buttonText: 'Choose Agency', isRecommended: false,
  }
];

const PricingPage = () => {
  return (
    <div className="pricing-page-wrapper">
      <Header theme="light" /> {/* Use the new header with the light theme */}
      <main className="container">
        {/* ... (Keep the rest of the pricing page content here) ... */}
        <div className="pricing-header">
          <h1>Choose the plan that's right for you.</h1>
          <p>Get started for free. Cancel anytime.</p>
        </div>
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isRecommended ? 'recommended' : ''}`}>
              {plan.isRecommended && <div className="recommended-badge">Recommended for Solopreneurs</div>}
              <div className="card-header">
                <h3>{plan.plan}</h3>
                <div className="price-container">
                  <span className="price">{plan.price}</span><span className="period">{plan.period}</span>
                </div>
                <p className="subtitle">{plan.subtitle}</p>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <a href="#trial" className={`pricing-button ${plan.isRecommended ? 'primary' : 'secondary'}`}>
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PricingPage;