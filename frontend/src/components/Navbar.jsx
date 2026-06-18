import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 transform-gpu ${scrolled ? 'py-1' : 'py-2 sm:py-3'}`}>

                {/* Dark Background Layer */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-xl shadow-2xl border-b border-yellow-600/20">
                </div>

                {/* Main Content Layer */}
                <div className="relative max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">

                    {/* Logo Section */}
                    <Link to="/" className="group flex-shrink">
                        <div className="flex items-center cursor-pointer transition-all duration-500 hover:scale-105">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-yellow-600/80 shadow-lg shadow-yellow-600/20">
                                <img
                                    src="/logo.png"
                                    alt="Prime Badminton Academy"
                                    className="w-full h-full object-cover"
                                    style={{ mixBlendMode: 'screen' }}
                                />
                                <div className="absolute inset-0 rounded-full bg-yellow-600/10 group-hover:bg-yellow-600/20 transition-all duration-500"></div>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8 text-white font-semibold">
                        <li className="relative group cursor-pointer transition-all duration-300">
                            <Link to="/" className="block py-2">
                                <span className="relative z-10">Home</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>

                        {['About', 'Coaches', 'Contact Us', 'Images'].map((item) => (
                            <li key={item} className="relative group cursor-pointer transition-all duration-300">
                                <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="block py-2">
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Join Button */}
                    <div className="hidden md:block">
                        <Link to="/joinus">
                            <button className="relative px-6 py-2 md:px-8 md:py-3 bg-yellow-600 text-black font-bold rounded-full transition-all duration-500 hover:bg-yellow-500 hover:scale-110 group whitespace-nowrap text-sm md:text-base">
                                <span className="relative z-10">Join Us</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="relative w-10 h-10 text-white focus:outline-none transition-all duration-300 z-20"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <svg className="w-5 h-5 mx-auto relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 mx-auto relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed left-0 right-0 top-[56px] sm:top-[64px] transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}`}
                    style={{ zIndex: 40 }}>
                    <div className="mx-3 mt-2 bg-black/95 backdrop-blur-xl rounded-xl border border-yellow-600/20 overflow-hidden shadow-2xl">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base border-b border-white/10"
                        >
                            Home
                        </Link>

                        {['About', 'Coaches', 'Contact Us', 'Images'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '')}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base border-b border-white/10"
                            >
                                {item}
                            </Link>
                        ))}

                        <Link
                            to="/joinus"
                            onClick={() => setIsOpen(false)}
                            className="block m-3 px-4 py-3 bg-yellow-600 text-black font-bold text-center rounded-lg hover:bg-yellow-500 transition-all duration-300 text-base"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Spacer div */}
            <div className={`transition-all duration-700 ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 md:h-24'}`}></div>
        </>
    );
};

export default Navbar;