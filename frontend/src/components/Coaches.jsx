import React from 'react';
import { FaInstagram, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Coaches = () => {
    const coaches = [
        {
            name: "Karan Chaudhary",
            image: "/karan.jpg",
            title: "International Badminton Player",
            bio: "Expert badminton coach with years of experience, specializing in singles and doubles training.",
            instagram: "https://www.instagram.com/karan_choudhary9090/",
            achievements: [
                "4x Junior State Champion in Singles",
                "3x Junior State Champion in Doubles",
                "8x Senior State Champion in Singles",
                "5x Senior State Champion in Doubles",
                "Silver Medallist in North Zone (Men's Singles)",
                "3x Bronze Medallist in North Zone",
                "Junior Highest Rank (U-19): All India #22",
                "Senior Highest Rank: All India #40",
                "Represented India in International Tournaments",
                "Represented Himachal Pradesh for 13+ Years"
            ]
        },
        {
            name: "Conditioning Coach",
            image: "/coach.jpg",
            title: "NIS Certified Strength & Conditioning Coach",
            bio: "NIS certified professional coach specializing in Strength and Conditioning (S&C) for athletes. Building champions through science-based training.",
            instagram: "https://www.instagram.com/karan_choudhary9090/",
            achievements: [
                "NIS Certified Coach",
                "Specialization: Strength & Conditioning (S&C)",
                "Expert in athlete performance optimization",
                "Sports science-based training methodology"
            ]
        },
        {
            name: "Datul",
            image: "/coch.webp",
            title: "Badminton Coach",
            bio: "Dedicated badminton coach with expertise in developing young talent and competitive players.",
            instagram: "#",
            achievements: [
                "Experienced Badminton Coach",
                "Youth development specialist",
                "Tactical and technical training expert"
            ]
        },
        {
            name: "Akriti",
            image: "/coch1.jpg",
            title: "Badminton Coach",
            bio: "Passionate coach focused on skill development and nurturing the next generation of badminton champions.",
            instagram: "#",
            achievements: [
                "Experienced Badminton Coach",
                "Skill development specialist",
                "Focus on fundamentals and advanced techniques"
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-[#0b0b0b] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 mt-10 drop-shadow-lg"
                    style={{ color: '#d4a017' }}>
                    Our Expert Coaches
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">Meet the champions behind Prime Badminton Academy</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {coaches.map((coach, index) => (
                        <div key={index}
                            className="rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:scale-[1.02]"
                            style={{
                                background: 'linear-gradient(135deg, #111111, #1a1a1a)',
                                border: '2px solid rgba(212, 160, 23, 0.3)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                            }}>
                            {/* Coach Image */}
                            <div className="relative h-80 sm:h-96 overflow-hidden">
                                <img
                                    src={coach.image}
                                    alt={coach.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{coach.name}</h3>
                                    <p className="text-sm font-medium" style={{ color: '#d4a017' }}>{coach.title}</p>
                                </div>
                            </div>

                            {/* Coach Bio */}
                            <div className="px-6 py-4">
                                <p className="text-gray-300 leading-relaxed text-sm">{coach.bio}</p>
                            </div>

                            {/* Achievements Section */}
                            <div className="px-6 pb-4 flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaTrophy style={{ color: '#d4a017' }} />
                                    <h4 className="text-lg font-bold" style={{ color: '#d4a017' }}>
                                        Achievements
                                    </h4>
                                </div>
                                <ul className="space-y-2">
                                    {coach.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <FaMedal className="flex-shrink-0 mt-0.5" style={{ color: '#a67c00', fontSize: '12px' }} />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Instagram Link */}
                            {coach.instagram !== "#" && (
                                <div className="px-6 pb-6 pt-2 mt-auto" style={{ borderTop: '1px solid rgba(212, 160, 23, 0.2)' }}>
                                    <a
                                        href={coach.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300 w-full justify-center py-2 rounded-lg"
                                        style={{
                                            color: '#d4a017',
                                            background: 'rgba(212, 160, 23, 0.1)'
                                        }}
                                    >
                                        <FaInstagram size={18} />
                                        <span className="text-sm font-medium">Follow on Instagram</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coaches;
