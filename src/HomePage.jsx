// src/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaRobot, FaSearch, FaCalendarCheck, FaComments, FaChartBar, FaBrain, FaWhatsapp, FaPlayCircle } from 'react-icons/fa';
import Header from './components/Header';
import VideoModal from './components/VideoModal'; // Import the new reusable modal

// --- DATA ---
const featuresData = [
  // ... (feature data remains the same)
  { icon: <FaRobot />, title: "Intelligent Lead Qualification", description: "AI asks the right questions to identify serious buyers, sellers, and renters. No more wasted time on unqualified leads." },
  { icon: <FaSearch />, title: "Smart Property Search Engine", description: "Seamlessly connects to your Google Sheets listings and provides instant property matches based on client requirements." },
  { icon: <FaCalendarCheck />, title: "Automatic Appointment Booking", description: "Syncs directly with your Google Calendar to schedule viewings and meetings without any back-and-forth." },
  { icon: <FaComments />, title: "24/7 Client Engagement", description: "Never miss a lead again. Your AI assistant works around the clock, engaging prospects instantly." },
  { icon: <FaChartBar />, title: "Complete Lead Intelligence", description: "All conversations and qualified leads are automatically logged to your Google Sheets for easy follow-up." },
  { icon: <FaBrain />, title: "Persistent Memory System", description: "Remembers every client interaction for natural, context-aware conversations that build long-term relationships." }
];

// Updated showcase data with YouTube Video IDs
const showcaseData = [
  { title: "Instant Lead Engagement", description: "See how the AI engages and qualifies a new lead in under 60 seconds.", videoId: "dQw4w9WgXcQ" },
  { title: "Automatic Appointment Booking", description: "Watch the agent's calendar get filled with qualified appointments, hands-free.", videoId: "y6120QOlsfU" },
  { title: "Answering Client Questions", description: "The AI provides detailed property information and answers complex questions instantly.", videoId: "34Na4j8AVgA" }
];

// --- MAIN PAGE COMPONENT ---
const HomePage = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <div>
      <Header theme="dark" />
      <main>
        <Hero />
        <Showcase onPlayVideo={setPlayingVideoId} /> {/* Pass the function to Showcase */}
        <Features />
        <FinalCta />
      </main>
      <WhatsAppWidget />
      {/* Conditionally render the modal */}
      {playingVideoId && <VideoModal videoId={playingVideoId} onClose={() => setPlayingVideoId(null)} />}
    </div>
  );
};

// --- SUB-COMPONENTS ---

// The Showcase component is updated to handle clicks
const Showcase = ({ onPlayVideo }) => (
    <section className="showcase">
        <div className="container">
            <h2>See Agent Optimus In Action</h2>
            <div className="showcase-grid">
                {showcaseData.map((item, index) => (
                    <div className="showcase-item" key={index} onClick={() => onPlayVideo(item.videoId)}>
                        <div className="video-placeholder" style={{backgroundImage: `url(https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg)`}}>
                            <FaPlayCircle className="play-icon" />
                        </div>
                        <div className="showcase-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/case-studies" className="showcase-cta">See More Case Studies</Link>
        </div>
    </section>
);

// ... (Hero, Features, FinalCta, WhatsAppWidget components remain the same)
const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-text">
        <div className="trial-badge">🚀 60-Day Free Trial</div>
        <h1>Transform WhatsApp Into Your <span className="highlight-red">Ultimate Lead</span> Converting Machine</h1>
        <p className="hero-subtitle">AI-powered WhatsApp assistant that qualifies leads, schedules viewings, and books appointments while you sleep. Built specifically for South African real estate professionals who demand results.</p>
        <div className="hero-stats">
          <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Hours Saved Weekly</span></div>
          <div className="stat-item"><span className="stat-number">30%</span><span className="stat-label">More Qualified Leads</span></div>
          <div className="stat-item"><span className="stat-number">24/7</span><span className="stat-label">Never Miss A Lead</span></div>
        </div>
        <div className="hero-cta-container"><a href="#trial" className="cta-button primary"><FaRocket /> Start Your 60-Day Free Trial</a></div>
      </div>
      <div className="hero-visual"><img src="https://i.imgur.com/tE2EnqW.png" alt="AI Real Estate Agent on WhatsApp" className="hero-image" /></div>
    </div>
  </section>
);
const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <div className="section-header">
        <h2>Everything You Need To <span className="highlight-red">Automate</span> Your <span className="highlight-blue">Real Estate Empire</span></h2>
      </div>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.description}</p></div>
        ))}
      </div>
    </div>
  </section>
);
const FinalCta = () => (
  <section className="final-cta" id="trial">
    <div className="container">
      <h2>Ready To <span className="highlight-red">10x Your Lead Conversion?</span></h2>
      <p>Join hundreds of South African real estate professionals who are already using Agent Optimus to dominate their local markets.</p>
      <a href="https://wa.me/27659030283?text=Hi! I'd like to start my 60-day free trial" target="_blank" rel="noopener noreferrer" className="cta-button primary"><FaRocket /> Start Your 60-Day Free Trial Now</a>
    </div>
  </section>
);
const WhatsAppWidget = () => (
  <a href="https://wa.me/27659030283" className="whatsapp-widget" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
);

export default HomePage;