// src/CaseStudyPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle, FaRocket } from 'react-icons/fa';
import Header from './components/Header'; // Use the reusable header
import VideoModal from './components/VideoModal'; // Use the reusable modal
import './CaseStudyPage.css';

// ... (Keep your caseStudiesData array here)
const caseStudiesData = [
  { title: "From 'Hi' to Qualified in 90 Seconds", description: "See how the AI qualifies a new lead from a property portal, asking all the right questions.", tag: "Lead Qualification", videoId: "dQw4w9WgXcQ", featured: true },
  { title: "Hands-Free Appointment Booking", description: "Watch the bot check availability and book a viewing directly in Google Calendar.", tag: "Automation", videoId: "y6120QOlsfU" },
  { title: "Instant Property Details, 24/7", description: "A client asks for details at 11 PM. See how the AI provides instant, accurate answers.", tag: "Data Access", videoId: "y6120QOlsfU" },
  { title: "Automated Follow-Up That Converts", description: "The bot re-engages a lead who went cold, leading to a new conversation and a booked appointment.", tag: "Conversion", videoId: "y6120QOlsfU" },
  { title: "Capturing a High-Value Seller Lead", description: "The bot identifies a potential seller, asks for their property details, and logs it as a high-priority lead.", tag: "Lead Generation", videoId: "y6120QOlsfU" },
  { title: "Handling Common Objections", description: "Watch the AI respond intelligently to questions like 'Is the price negotiable?'", tag: "AI Intelligence", videoId: "y6120QOlsfU" },
  { title: "Distributing Leads to the Right Agent", description: "A look at the Agency Plan feature where new leads are automatically routed to the correct agent.", tag: "Team Features", videoId: "y6120QOlsfU" },
  { title: "Real-Time Data Logging", description: "See how every interaction is perfectly logged in Google Sheets for full visibility.", tag: "Analytics", videoId: "y6120QOlsfU" }
];

const featuredStudy = caseStudiesData.find(study => study.featured);
const otherStudies = caseStudiesData.filter(study => !study.featured);

const CaseStudyPage = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <div className="case-study-page-wrapper">
      <Header theme="light" />
      <main className="container">
        {/* ... (Keep all the content here, it's already correct) ... */}
        <div className="page-header">
          <h1>Real Results, Real Agents</h1>
          <p>See how Agent Optimus is transforming the way real estate professionals work, one conversation at a time.</p>
        </div>
        {featuredStudy && (
            <div className="featured-case-study" onClick={() => setPlayingVideoId(featuredStudy.videoId)}>
                <div className="video-placeholder-featured" style={{backgroundImage: `url(https://img.youtube.com/vi/${featuredStudy.videoId}/maxresdefault.jpg)`}}>
                    <FaPlayCircle className="play-icon" />
                </div>
                <div className="card-content-featured">
                    <span className="case-study-tag featured-tag">{featuredStudy.tag}</span>
                    <h3>{featuredStudy.title}</h3>
                    <p>{featuredStudy.description}</p>
                </div>
            </div>
        )}
        <div className="case-study-grid">
          {otherStudies.map((study, index) => (
            <div className="case-study-card" key={index} onClick={() => setPlayingVideoId(study.videoId)}>
              <div className="video-placeholder" style={{backgroundImage: `url(https://img.youtube.com/vi/${study.videoId}/hqdefault.jpg)`}}>
                <FaPlayCircle className="play-icon" />
              </div>
              <div className="card-content">
                <span className="case-study-tag">{study.tag}</span>
                <h4>{study.title}</h4>
                <p>{study.description}</p>
              </div>
            </div>
          ))}
        </div>
        <section className="case-study-cta-section">
            <h2>Ready to Write Your Own Success Story?</h2>
            <p>Start your free trial today and experience the power of automation firsthand.</p>
            <Link to="/#trial" className="cta-button primary">
                <FaRocket /> Start Your 60-Day Free Trial
            </Link>
        </section>
      </main>
      {playingVideoId && <VideoModal videoId={playingVideoId} onClose={() => setPlayingVideoId(null)} />}
    </div>
  );
};

export default CaseStudyPage;