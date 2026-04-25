import React, { useState, useEffect } from "react";
import logo from "./prime.jpg.jpg";
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
            <nav className={`fixed w-full z-50 transition-all duration-700 transform-gpu preserve-3d ${scrolled ? 'py-2' : 'py-3 sm:py-4'}`}
                style={{ transformStyle: 'preserve-3d' }}>

                {/* 3D Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-xl shadow-2xl border-b border-white/20"
                    style={{ transform: 'translateZ(-10px) scale(1.02)' }}>
                </div>

                {/* Main Content Layer */}
                <div className="relative max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between"
                    style={{ transform: 'translateZ(20px)' }}>

                    {/* 3D Logo Section - Fixed for mobile horizontal layout */}
                    <Link to="/" className="group perspective-1000 flex-shrink">
                        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 cursor-pointer transform-gpu transition-all duration-500 hover:scale-105">

                            {/* Logo image */}
                            <div className="relative transform-gpu transition-transform duration-500 group-hover:rotate-y-12 flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Prime Badminton Academy"
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full border-2 border-blue-400/80 shadow-2xl"
                                />
                                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            </div>

                            {/* Text in HORIZONTAL layout - Always horizontal on all devices */}
                            <div className="flex items-center space-x-0 sm:space-x-1 md:space-x-2">
                                <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                                    <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 whitespace-nowrap">
                                        PRIME
                                    </h1>
                                    <div className="absolute inset-0 text-base sm:text-lg md:text-xl lg:text-3xl font-black text-white blur-sm opacity-50 whitespace-nowrap"
                                        style={{ transform: 'translateZ(-5px)' }}>
                                        PRIME
                                    </div>
                                </div>

                                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-400 whitespace-nowrap">BADMINTON</span>

                                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/80 whitespace-nowrap">ACADEMY</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8 text-white font-semibold perspective-1000">
                        <li className="relative group cursor-pointer transform-gpu transition-all duration-300 hover:translate-z-10">
                            <Link to="/" className="block py-2">
                                <span className="relative z-10">Home</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                <span className="absolute inset-0 bg-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>
                        </li>

                        {['About', 'Coaches', 'Contact Us', 'Images'].map((item) => (
                            <li key={item} className="relative group cursor-pointer transform-gpu transition-all duration-300 hover:translate-z-10">
                                <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="block py-2">
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    <span className="absolute inset-0 bg-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Join Button */}
                    <div className="hidden md:block perspective-1000">
                        <Link to="/joinus">
                            <button className="relative px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full transform-gpu transition-all duration-500 hover:translate-z-10 hover:scale-110 group whitespace-nowrap text-sm md:text-base">
                                <span className="relative z-10">Join Us</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full" style={{ transform: 'translateZ(-5px)' }}></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 rounded-full blur-md" style={{ transform: 'translateZ(-10px)' }}></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden perspective-1000">
                        <button
                            className="relative w-10 h-10 text-white focus:outline-none transform-gpu transition-all duration-300 hover:rotate-12 z-20"
                            onClick={() => setIsOpen(!isOpen)}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-all duration-500 ${isOpen ? 'rotate-45' : ''}`}
                                style={{ transform: 'translateZ(-5px)' }}></div>
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
                <div className={`md:hidden fixed left-0 right-0 top-[56px] sm:top-[64px] transition-all duration-500 transform-gpu ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}`}
                    style={{ transformStyle: 'preserve-3d', zIndex: 40 }}>
                    <div className="mx-3 mt-2 bg-gradient-to-b from-blue-900/95 to-purple-900/95 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden shadow-2xl">
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
                            className="block m-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-center rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-base"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Spacer div */}
            <div className={`transition-all duration-700 ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'}`}></div>
        </>
    );
};

export default Navbar;