import React from 'react'

const Coaches = () => {
    const coaches = [
        {
            name: "Karan Chaudhary",
            image: "https://via.placeholder.com/300x200?text=Coach+1",
            bio: "Expert badminton coach with 15 years of experience, specializing in singles and doubles training."
        },
        // {
        //     name: "Rohan Dubedi",
        //     image: "https://via.placeholder.com/300x200?text=Coach+2",
        //     bio: "Former national player, focusing on youth development and advanced techniques."
        // },,

        {
            name: "Physio",
            image: "https://via.placeholder.com/300x200?text=Coach+3",
            bio: "Certified trainer with a passion for building champions through disciplined coaching."
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
                        <div key={index} className="bg-[#111111] border-2 border-cyan-400/80 rounded-2xl shadow-2xl p-6 hover:shadow-cyan-400/40 transition-all duration-500 hover:scale-105">
                            <img src={coach.image} alt={coach.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{coach.name}</h3>
                            <p className="text-gray-300 leading-relaxed">{coach.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Coaches
