import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

const Contactus = () => {
    return (
        <div className="w-screen min-h-screen flex justify-center items-center bg-black dark:bg-white py-12 px-4">
            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8">
                {/* Main Heading */}
                <h1 className="relative w-full xl:text-8xl md:text-7xl text-4xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[1.1em] outline-none animate-dimlight box-reflect">
                    Get In Touch
                </h1>

                {/* Contact Information Container */}
                <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center mt-8">

                    {/* Phone Contact */}
                    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20 group cursor-pointer">
                        <div className="text-5xl md:text-6xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <FaPhone />
                        </div>
                        <p className="text-gray-300 text-sm md:text-base mb-3 uppercase tracking-widest font-semibold">Phone</p>
                        <a
                            href="tel:9815078906"
                            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                        >
                            9815078906
                        </a>
                    </div>

                    {/* Email Contact */}
                    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 group cursor-pointer">
                        <div className="text-5xl md:text-6xl text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <FaEnvelope />
                        </div>
                        <p className="text-gray-300 text-sm md:text-base mb-3 uppercase tracking-widest font-semibold">Email</p>
                        <a
                            href="mailto:primeacademyhp@gmail.com"
                            className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-rose-300 hover:scale-105 transition-transform duration-300 text-center break-all"
                        >
                            primeacademyhp@gmail.com
                        </a>
                    </div>

                </div>

                {/* Additional Message */}
                <p className="text-gray-400 text-center text-sm md:text-base mt-8 max-w-2xl">
                    Feel free to reach out to us for any inquiries or to join our academy. <br />
                    We'll be happy to help you get started on your journey!
                </p>
            </div>
        </div>
    )
}

export default Contactus
