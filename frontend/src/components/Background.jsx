import React from 'react';
import '../index.css';
import "../css/Background.css";
import { Link } from 'react-router-dom';
import CardsBack from './CardsBack';
import Footer from './Footer';

const Background = () => {
    // Exact coordinates for the pin
    const latitude = 31.464391;
    const longitude = 76.286321;

    // Option B: If you don't have API key, use this format (works without API key)
    const locationUrlWithoutKey = `https://maps.google.com/maps?q=${latitude},${longitude}&z=19&output=embed`;

    return (
        <>
            {/* Full-Screen Hero Section */}
            <section className="hero-section">
                <div className="hero-inner">
                    {/* Left - Text Content */}
                    <div className="hero-text">
                        <h1 className="hero-headline">
                            <span className="white-text">WHERE</span>
                            <span className="gold-text">CHAMPIONS</span>
                            <span className="white-text">ARE MADE</span>
                        </h1>
                        <p className="hero-subheadline">
                            High Performance Training for Future Champions.
                        </p>
                        <Link to="/joinus" className="hero-cta-btn">
                            JOIN NOW
                        </Link>
                    </div>

                    {/* Right - 3D Player Visual */}
                    <div className="hero-visual">
                        <div className="player-3d-scene">
                            {/* Yellow motion lines - right to left */}
                            <div className="motion-lines">
                                <div className="motion-line ml-1"></div>
                                <div className="motion-line ml-2"></div>
                                <div className="motion-line ml-3"></div>
                                <div className="motion-line ml-4"></div>
                                <div className="motion-line ml-5"></div>
                                <div className="motion-line ml-6"></div>
                                <div className="motion-line ml-7"></div>
                            </div>

                            {/* 3D Player SVG Silhouette */}
                            <div className="player-3d-figure">
                                {/* Shadow layers for 3D depth */}
                                <div className="player-shadow-1"></div>
                                <div className="player-shadow-2"></div>
                                <div className="player-shadow-3"></div>
                                <svg viewBox="-40 -80 480 680" className="player-svg" xmlns="http://www.w3.org/2000/svg">
                                    {/* Player Body */}
                                    <g fill="#d4a017" className="player-body">
                                        {/* Head */}
                                        <ellipse cx="200" cy="95" rx="35" ry="40" />
                                        {/* Neck */}
                                        <rect x="190" y="130" width="20" height="20" rx="5" />
                                        {/* Torso */}
                                        <path d="M160,150 Q155,180 150,220 L170,280 Q200,290 230,280 L250,220 Q245,180 240,150 Z" />
                                        {/* Right arm (raised with racket) */}
                                        <path d="M240,160 Q270,140 290,100 Q300,80 310,50" strokeWidth="18" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Left arm (extended for balance) */}
                                        <path d="M160,160 Q130,175 100,200 Q85,215 70,230" strokeWidth="16" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Right leg (jumping) */}
                                        <path d="M220,275 Q240,340 260,400 Q265,430 270,460" strokeWidth="20" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Left leg (bent back) */}
                                        <path d="M180,275 Q170,340 180,380 Q200,400 230,410" strokeWidth="20" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Right foot */}
                                        <path d="M270,455 Q280,465 295,468" strokeWidth="14" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Left foot */}
                                        <path d="M225,405 Q240,415 255,418" strokeWidth="14" stroke="#d4a017" fill="none" strokeLinecap="round" />
                                        {/* Shorts */}
                                        <path d="M165,265 Q160,300 175,320 L200,310 L225,320 Q240,300 235,265 Z" />
                                    </g>

                                    {/* Racket */}
                                    <g className="racket-group">
                                        {/* Racket handle */}
                                        <line x1="308" y1="52" x2="340" y2="15" stroke="#a67c00" strokeWidth="6" strokeLinecap="round" />
                                        {/* Racket head */}
                                        <ellipse cx="358" cy="0" rx="30" ry="22" fill="none" stroke="#d4a017" strokeWidth="4" transform="rotate(-30, 358, 0)" />
                                        {/* Racket strings (simplified) */}
                                        <ellipse cx="358" cy="0" rx="22" ry="16" fill="rgba(212,160,23,0.15)" transform="rotate(-30, 358, 0)" />
                                        <line x1="342" y1="-15" x2="374" y2="15" stroke="rgba(212,160,23,0.3)" strokeWidth="1" />
                                        <line x1="338" y1="5" x2="378" y2="-5" stroke="rgba(212,160,23,0.3)" strokeWidth="1" />
                                        <line x1="350" y1="-20" x2="366" y2="20" stroke="rgba(212,160,23,0.3)" strokeWidth="1" />
                                    </g>

                                    {/* Shuttlecock */}
                                    <g className="shuttlecock">
                                        <circle cx="330" cy="-30" r="6" fill="#f9fafb" />
                                        <path d="M324,-30 L310,-45 M330,-36 L325,-52 M336,-30 L340,-46" stroke="#d1d5db" strokeWidth="2" fill="none" />
                                    </g>
                                </svg>
                            </div>

                            {/* Ground glow */}
                            <div className="player-ground-glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dashboard-container">
                <div className="dashboard-card">
                    {/* Blinking Advertisement Banner */}
                    <div className="advertisement-banner">
                        <Link to="/joinus" className="ad-link">
                            <div className="blinking-banner">
                                <div className="banner-content">
                                    <span className="banner-icon">🎯</span>
                                    <span className="banner-text">Limited Slots Available</span>
                                    <span className="banner-highlight">Join Now</span>
                                    <span className="banner-arrow">→</span>
                                    <span className="banner-icon">🏸</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="welcome-section">
                        <h1 className="welcome-3d" data-text="Welcome to Prime Badminton Academy">Welcome to Prime Badminton Academy</h1><br />
                        <div className="academy-badge">
                            <i className="fas fa-badminton"></i> Est. 2025
                        </div>
                    </div>

                    <div className="cards-grid">
                        <div className="flip-card training-bg">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <i className="fas fa-trophy"></i>
                                    <h3>Training Programs</h3>
                                    <p>Professional badminton training</p>
                                </div>
                                <div className="flip-card-back">
                                    <i className="fas fa-bullhorn"></i>
                                    {/* <p>Beginner</p>
                                    <p>to Advanced levels</p>
                                    <p>Personalized coaching sessions</p> */}
                                    <a href="#" className="btn-small" style={{ marginTop: 'auto' }}>Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card coaches-bg">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <i className="fas fa-users"></i>
                                    <h3>Elite Coaches</h3>
                                    <p>National & International experts</p>
                                </div>
                                <div className="flip-card-back">
                                    <i className="fas fa-medal"></i>
                                    {/* <p>Former national players</p>
                                    <p>Certified coaching staff</p> */}
                                    <Link to="/coaches" className="btn-small" style={{ marginTop: 'auto' }}>Meet Coaches</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card tournaments-bg">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <i className="fas fa-calendar-alt"></i>
                                    <h3>Tournaments</h3>
                                    <p>Regular competitions & events</p>
                                </div>
                                <div className="flip-card-back">
                                    <i className="fas fa-chart-line"></i>
                                    {/* <p>Monthly championships</p>
                                    <p>Ranking tournaments</p> */}
                                    <a href="#" className="btn-small" style={{ marginTop: 'auto' }}>View Schedule</a>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card facilities-bg">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <i className="fas fa-dumbbell"></i>
                                    <h3>Facilities</h3>
                                    <p>World-class infrastructure</p>
                                </div>
                                <div className="flip-card-back">
                                    <i className="fas fa-building"></i>
                                    {/* <p>5 professional courts</p>
                                    <p>Fitness center & recovery zone</p> */}
                                    <Link to="/about" className="btn-small" style={{ marginTop: 'auto' }}>Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stat-card">
                            <span className="stat-number">Slots Open</span>
                            <span className="stat-label">For Admission</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">3</span>
                            <span className="stat-label">Expert Coaches</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Professional Conditioning coach</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Professional Courts</span>
                        </div>
                    </div>

                    {/* Location Section with Map and Pin */}
                    <div className="location-section">
                        <div className="location-title">
                            <i className="fas fa-map-marker-alt"></i>
                            Our Location
                        </div>
                        <div className="location-address">
                            <p>
                                <strong>Prime Badminton Academy</strong><br />
                                Una, Himachal Pradesh - 174303, India<br />
                                {/* <span className="coordinates">📍 Coordinates: {latitude}, {longitude}</span> */}
                            </p>
                        </div>
                        <div className="map-container">
                            <iframe
                                src={locationUrlWithoutKey}
                                title="Prime Badminton Academy Location - Una, Himachal Pradesh"
                                style={{ border: 0, width: '100%', height: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="location-details">
                            <div className="location-info">
                                <i className="fas fa-phone"></i>
                                <span>9815078906</span>
                            </div>
                            <div className="location-info">
                                <i className="fas fa-envelope"></i>
                                <span>primeacademyhp@gmail.com</span>
                            </div>
                            <div className="location-info">
                                <i className="fas fa-clock"></i>
                                <span>Mon-Sat: 6:00 AM - 10:00 PM</span>
                            </div>
                            <div className="location-info">
                                <i className="fas fa-clock"></i>
                                <span>Sunday: 8:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="join-section">
                        <Link to="/joinus">
                            <button className="btn-join-3d">
                                <i className="fas fa-badminton"></i> Join Prime Academy Now
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </Link>
                    </div>

                    <div className="footer">
                        <p>&copy; 2024 Prime Badminton Academy | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                        <p><i className="fas fa-map-marker-alt"></i> Una, Himachal Pradesh - 174303 | <i className="fas fa-phone"></i> +91 12345 67890</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Background;  