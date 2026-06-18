import React from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScF1DJZToRJLt5Shv3Exshr2xgzSV2TiQCJFGcv_D7zPrSwYg/viewform?usp=sharing&ouid=115145244420064950279";

const CdJoinus = () => {
    return (
        <div style={{ background: '#0b0b0b', minHeight: '100vh' }}>
            {/* Hero Section */}
            <div className="relative overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #d4a017 0%, transparent 70%)' }}></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{ background: 'rgba(212, 160, 23, 0.15)', border: '1px solid rgba(212, 160, 23, 0.3)' }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#d4a017' }}></span>
                        <span className="text-sm font-semibold" style={{ color: '#d4a017' }}>Limited Slots Available — Enroll Now</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                        <span className="text-white">START YOUR</span><br />
                        <span style={{ color: '#d4a017' }}>CHAMPION JOURNEY</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: '#d1d5db' }}>
                        Join Prime Badminton Academy and train with the best coaches in Himachal Pradesh.
                        Your path to becoming a champion begins here.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            { icon: '🏆', text: 'State-Level Champions' },
                            { icon: '🎯', text: '5 Professional Courts' },
                            { icon: '💪', text: 'NIS Certified Coaching' },
                            { icon: '⭐', text: 'International Players' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(212, 160, 23, 0.2)',
                                }}>
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Google Form CTA */}
                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 group"
                        style={{
                            background: 'linear-gradient(135deg, #d4a017, #a67c00)',
                            color: '#0b0b0b',
                            boxShadow: '0 8px 30px rgba(212, 160, 23, 0.4)'
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        REGISTER NOW — FREE ENQUIRY
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="mt-4 text-sm" style={{ color: '#999' }}>Fill out our quick registration form — No fees to enquire</p>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-5xl mx-auto px-6 pb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
                    Why Choose <span style={{ color: '#d4a017' }}>Prime Badminton Academy?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: '🏸', title: 'Expert Coaching', desc: 'Train under 8x State Champion Karan Chaudhary and NIS certified conditioning coaches.' },
                        { icon: '🏟️', title: 'World-Class Facilities', desc: '5 professional badminton courts with modern infrastructure and training equipment.' },
                        { icon: '📈', title: 'Proven Track Record', desc: 'Our players have won multiple state championships and represented India internationally.' },
                        { icon: '🎓', title: 'All Levels Welcome', desc: 'From beginners to advanced players — personalized training programs for every skill level.' },
                        { icon: '🏅', title: 'Tournament Ready', desc: 'Regular competitive tournaments and match practice to sharpen your game skills.' },
                        { icon: '💪', title: 'Strength & Conditioning', desc: 'Dedicated fitness and conditioning programs to build athletic performance.' },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                            style={{
                                background: 'linear-gradient(135deg, rgba(212, 160, 23, 0.08), rgba(17, 17, 17, 0.95))',
                                border: '1px solid rgba(212, 160, 23, 0.15)',
                            }}>
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center pb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Ready to <span style={{ color: '#d4a017' }}>Get Started?</span>
                    </h2>
                    <p className="text-sm mb-6" style={{ color: '#999' }}>Complete your registration in just 2 minutes</p>
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                        style={{
                            border: '2px solid #d4a017',
                            color: '#d4a017',
                            background: 'transparent'
                        }}>
                        Open Registration Form →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CdJoinus;
