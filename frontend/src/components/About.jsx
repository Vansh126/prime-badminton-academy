import React from 'react';
import '../css/Banner.css';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#1b1b1b] flex flex-col items-center justify-center px-6 py-16 text-white"
        >
            <div className="space-y-12 max-w-4xl w-full">
                <div className="bg-[#111111] border-2 border-cyan-400/80 rounded-2xl shadow-2xl p-8 md:p-12 text-center hover:shadow-cyan-400/40 transition-all duration-500">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
                        About Us
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Rising Star Badminton Academy has capacity to train over <span className="text-cyan-400 font-semibold">500+</span> players under the guidance of <span className="text-cyan-400 font-semibold">expert coaches</span>.
                        <br /><br />
                        Our mission is to nurture young talent, build discipline, and develop the champions of tomorrow —
                        empowering every player to reach their true potential on and off the court.
                    </p>
                </div>

                {/* Current Facilities Section */}
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-lg">
                        Our Facilities
                    </h3>
                    <div className="space-y-8">
                        <div className="bg-[#0a0a0a] border border-cyan-400/50 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 flex flex-col md:flex-row items-center">
                            <img src="https://img500.exportersindia.com/product_images/bc-500/2022/5/240093/4-5mm-bwf-approved-indoor-sports-court-floorings-1653025040-6348078.jpeg" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">5 Professional Courts</h4>
                                <p className="text-gray-300 leading-relaxed">State-of-the-art badminton courts for optimal training and matches.</p>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-cyan-400/50 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 flex flex-col md:flex-row items-center">
                            <img src="https://thumbs.dreamstime.com/b/close-up-showcase-dishes-modern-self-service-canteen-cafeteria-mess-hall-factory-employees-having-lunch-261322041.jpg" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Canteen Facility</h4>
                                <p className="text-gray-300 leading-relaxed">Nutritious meals and refreshments to keep players energized.</p>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-cyan-400/50 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 flex flex-col md:flex-row items-center">
                            <img src="https://images.jdmagicbox.com/v2/comp/hyderabad/g1/040pxx40.xx40.190719192906.d4g1/catalogue/bc-welfare-hostel-kodandaram-nagar-hyderabad-hostels-1vsgzqc2it.jpg" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Hostel Facility</h4>
                                <p className="text-gray-300 leading-relaxed">Comfortable accommodation for outstation players and trainees.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Facilities Section */}
                <div className="text-center">
                    <div className="advertisement-banner mb-8">
                        <div className="blinking-banner">
                            <div className="banner-content">
                                <span className="banner-icon">🚀</span>
                                <span className="banner-text">COMING SOON</span>
                                <span className="banner-highlight">New Facilities</span>
                                <span className="banner-icon">🏆</span>
                            </div>
                            <div className="banner-pulse"></div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-lg">
                        Upcoming Facilities
                    </h3>
                    <div className="space-y-8">
                        {/* Olympic Size Swimming Pool */}
                        <div className="bg-[#0a0a0a] border border-cyan-400/50 rounded-lg p-6 hover:border-cyan-400 transition-all duration-500 hover:scale-105 transform flex flex-col md:flex-row items-center">
                            <img src="https://www.fluidra.com/wp-content/uploads/2022/07/1018_Fl.2012.jpg" alt="Olympic-Size Swimming Pool" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-xs font-bold px-2 py-1 rounded-full">Coming soon</span>
                                </div>
                                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">Mini Olympic-Size Swimming Pool</h4>
                                <p className="text-gray-300 leading-relaxed">World-class 50m Olympic-size swimming pool for professional training and competitions.</p>
                            </div>
                        </div>

                        {/* Cricket Bowling Turf */}
                        <div className="bg-[#0a0a0a] border border-green-400/50 rounded-lg p-6 hover:border-green-400 transition-all duration-500 hover:scale-105 transform flex flex-col md:flex-row items-center">
                            <img src="https://content.jdmagicbox.com/v2/comp/delhi/l6/011pxx11.xx11.221117110915.k3l6/catalogue/ajaib-enterprises-llp-bawana-delhi-cricket-bowling-machine-dealers-o2px2hfik8.jpg" alt="Cricket Bowling Turf" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-xs font-bold px-2 py-1 rounded-full">Coming soon</span>
                                </div>
                                <h4 className="text-2xl font-semibold text-green-400 mb-2">Professional Cricket Bowling Turf</h4>
                                <p className="text-gray-300 leading-relaxed">International standard cricket turf for bowling practice and match preparation.</p>
                            </div>
                        </div>

                        {/* Gym Facility */}
                        <div className="bg-[#0a0a0a] border border-orange-400/50 rounded-lg p-6 hover:border-orange-400 transition-all duration-500 hover:scale-105 transform flex flex-col md:flex-row items-center">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwZ3ltfGVufDB8fDB8fHww" alt="State-of-the-art Gym Facility" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-xs font-bold px-2 py-1 rounded-full">Coming soon</span>
                                </div>
                                <h4 className="text-2xl font-semibold text-orange-400 mb-2">Premium Gym Facility</h4>
                                <p className="text-gray-300 leading-relaxed">State-of-the-art fitness center with latest equipment and professional trainers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;