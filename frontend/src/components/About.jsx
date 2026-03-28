import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#1b1b1b] flex flex-col items-center justify-center px-6 py-16 text-white"
        >
            <div className="space-y-12 max-w-4xl">
                <div className="bg-[#111111] border-2 border-cyan-400/80 rounded-2xl shadow-2xl p-8 md:p-12 text-center hover:shadow-cyan-400/40 transition-all duration-500">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
                        About Us
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Rising Star Badminton Academy has trained over <span className="text-cyan-400 font-semibold">2500+</span> players under the guidance of <span className="text-cyan-400 font-semibold">3+ expert coaches</span>.
                        <br /><br />
                        Our mission is to nurture young talent, build discipline, and develop the champions of tomorrow —
                        empowering every player to reach their true potential on and off the court.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-lg">
                        Our Facilities
                    </h3>
                    <div className="space-y-8">
                        <div className="bg-[#0a0a0a] border border-cyan-400/50 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 flex flex-col md:flex-row items-center">
                            <img src="https://img500.exportersindia.com/product_images/bc-500/2022/5/240093/4-5mm-bwf-approved-indoor-sports-court-floorings-1653025040-6348078.jpeg" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">5 Courts</h4>
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
                        <div className="bg-[#0a0a0a] border border-yellow-400/50 rounded-lg p-6 hover:border-yellow-400 transition-colors duration-300 flex flex-col md:flex-row items-center">
                            <img src="https://www.fluidra.com/wp-content/uploads/2022/07/1018_Fl.2012.jpg" alt="Olympic-Size Swimming Pool" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                            <div className="flex-1">
                                <h4 className="text-2xl font-semibold text-yellow-400 mb-2">Upcoming: Olympic-Size Swimming Pool</h4>
                                <p className="text-gray-300 leading-relaxed">Exciting addition coming soon to enhance our comprehensive sports training facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
