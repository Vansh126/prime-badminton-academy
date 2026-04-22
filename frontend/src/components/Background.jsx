import React from 'react';
import '../index.css';
import "../css/Background.css";
import { Link } from 'react-router-dom';
import CardsBack from './CardsBack';
import Footer from './Footer';

const Background = () => {
    // Updated location URL with your new Google Maps embed code
    const locationUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162.01635134840063!2d76.28621125249188!3d31.46439301195053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1774686415058!5m2!1sen!2sin";

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-card">
                    <div className="welcome-section">
                        <h1 className="welcome-3d" data-text="Welcome to Prime Badminton Academy">Welcome to Prime Badminton Academy</h1>
                        <div className="academy-badge">
                            <i className="fas fa-badminton"></i> Est. 2024
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
                                    <p>Beginner to Advanced levels</p>
                                    <p>Personalized coaching sessions</p>
                                    <a href="#" className="btn-small">Learn More</a>
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
                                    <p>Former national players</p>
                                    <p>Certified coaching staff</p>
                                    <Link to="/coaches" className="btn-small">Meet Coaches</Link>
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
                                    <p>Monthly championships</p>
                                    <p>Ranking tournaments</p>
                                    <a href="#" className="btn-small">View Schedule</a>
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
                                    <p>6 professional courts</p>
                                    <p>Fitness center & recovery zone</p>
                                    <Link to="/about" className="btn-small">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stat-card">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Active Students</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Expert Coaches</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Tournaments Won</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Professional Courts</span>
                        </div>
                    </div>

                    {/* Location Section with Map */}
                    <div className="location-section">
                        <div className="location-title">
                            <i className="fas fa-map-marker-alt"></i>
                            Our Location
                        </div>
                        <div className="location-address">
                            <p>Una, Himachal Pradesh - 174303, India</p>
                        </div>
                        <div className="map-container">
                            <iframe
                                src={locationUrl}
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
                                <span>+91 12345 67890</span>
                            </div>
                            <div className="location-info">
                                <i className="fas fa-envelope"></i>
                                <span>info@primebadminton.com</span>
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
                        <button className="btn-join-3d">
                            <i className="fas fa-badminton"></i> Join Prime Academy Now
                            <i className="fas fa-arrow-right"></i>
                        </button>
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