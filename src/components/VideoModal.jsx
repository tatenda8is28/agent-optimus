// src/components/VideoModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './VideoModal.css'; // We will create this CSS file next

const VideoModal = ({ videoId, onClose }) => {
    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-button" onClick={onClose}><FaTimes /></button>
                <div className="video-responsive-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;