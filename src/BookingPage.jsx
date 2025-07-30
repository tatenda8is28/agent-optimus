// src/BookingPage.jsx
import React from 'react';
import { InlineWidget } from "react-calendly"; // Import Calendly widget
import { FaGoogle, FaCalendarAlt, FaKey, FaBolt, FaCog, FaCheck } from 'react-icons/fa';
import Header from './components/Header';
import './BookingPage.css';

// --- DATA FOR ONBOARDING REQUIREMENTS ---
const requirements = [
    { icon: <FaGoogle />, text: "Access to your Google account to connect Sheets and Calendar." },
    { icon: <FaCalendarAlt />, text: "A dedicated Google Calendar for the AI to book appointments." },
    { icon: <FaKey />, text: "Your own Gemini API key for the AI to function." }
];

// --- DATA FOR SETUP PROCESS ---
const setupSteps = [
    { icon: <FaBolt />, title: "Connect Accounts", description: "Securely link your Google and Gemini accounts." },
    { icon: <FaCog />, title: "Configure Settings", description: "We'll help you set up your custom availability and properties." },
    { icon: <FaCheck />, title: "Go Live!", description: "Your AI agent will be ready to engage leads instantly." }
];

// --- MAIN BOOKING PAGE COMPONENT ---
const BookingPage = () => {
    return (
        <div className="booking-page-wrapper">
            <Header theme="light" />
            <main className="container">
                <div className="page-intro">
                    <h1>Book Your 15-Minute Setup Call</h1>
                    <p>Your AI agent will be live and ready to capture leads right after this call.</p>
                </div>

                <div className="booking-container">
                    {/* The form is replaced with the Calendly widget */}
                    <div className="calendly-container">
                        <InlineWidget url="https://calendly.com/aaronmutsvanga2/new-meeting" />
                        {/* IMPORTANT: Replace the URL above with your actual Calendly link */}
                    </div>

                    <aside className="onboarding-info">
                        <div className="info-section">
                            <h3>What you'll need for setup:</h3>
                            <ul className="info-list">
                                {requirements.map((item, index) => (
                                    <li key={index}>
                                        <div className="requirement-icon">{item.icon}</div>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="info-section setup-process">
                            <h3>The 15-Minute Setup Process:</h3>
                            <ul className="info-list">
                                {setupSteps.map((step, index) => (
                                    <li key={index}>
                                        <div className="requirement-icon">{step.icon}</div>
                                        <div className="step-text">
                                            <h4>{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default BookingPage;