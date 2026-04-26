import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Coaches = () => {
    const coaches = [
        {
            name: "Karan Chaudhary",
            image: "/shaktimaan.jpg",
            bio: "International Badminton Player Expert badminton coach with 15 years of experience, specializing in singles and doubles training.",
            instagram: "https://www.instagram.com/karan_choudhary9090/"
        },
        {
            name: "Professional Conditioning coach",
            image: "/shaktimaan2.png",
            bio: "Certified trainer with a passion for building champions through disciplined coaching.",
            instagram: "https://www.instagram.com/karan_choudhary9090/"
        }
    ];

    return (
        <section className="min-h-screen bg-[#1b1b1b] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-12 mt-15 drop-shadow-lg">
                    Our Expert Coaches
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coaches.map((coach, index) => (
                        <div key={index} className="bg-[#111111] border-2 border-cyan-400/80 rounded-2xl shadow-2xl hover:shadow-cyan-400/40 transition-all duration-500 hover:scale-105 flex flex-col h-full">
                            <div className="p-6 flex-grow">
                                <img src={coach.image} alt={coach.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{coach.name}</h3>
                                <p className="text-gray-300 leading-relaxed">{coach.bio}</p>
                            </div>
                            {/* Instagram Icon - Fixed at bottom of card */}
                            <div className="px-6 pb-6 pt-2 border-t border-cyan-400/30 mt-auto">
                                <a
                                    href={coach.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-all duration-300 hover:translate-x-1 w-full justify-center py-2 bg-pink-500/10 rounded-lg hover:bg-pink-500/20"
                                >
                                    <FaInstagram size={18} />
                                    <span className="text-sm font-medium">Follow on Instagram</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coaches;