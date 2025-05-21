import React from 'react';

function ExperienceCard(props) {
    const experiences = [
        {
            role: "Flutter Developer",
            company: "EqSoft Business Solution Pvt. Ltd",
            period: "Jan 2024 — Present",
            description: ""
        },
        {
            role: "Jr.Flutter Developer",
            company: "Digital Orbis Creators LLP",
            period: "June 2022 — October 2023",
            description: ""
        },
        {
            role: "Team Lead",
            company: "Soldat Global Technologies",
            period: "October 2020 — May 2022",
            description: ""
        },
        {
            role: "Process Associate",
            company: "Job Store Consulting",
            period: "February 2018 - September 2020",
            description: ""
        }
    ];

    return (
        <div>
            <h1 className='text-white px-4 sm:px-6 py-4 text-2xl sm:text-3xl font-extrabold'>Experience</h1>
            <div className="mb-8 sm:mb-12">
                <div className="relative px-4 sm:px-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-6 sm:mb-8 relative pl-6 sm:pl-8">
                            <div className="absolute left-0 top-2 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full"></div>
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-1 sm:left-1.5 top-4 w-0.5 h-full bg-gray-700 -translate-x-1/2"></div>
                            )}
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                                <p className="text-gray-400 text-sm sm:text-base mb-1">{exp.company}</p>
                                <p className="text-cyan-400 text-sm sm:text-base mb-2">{exp.period}</p>
                                <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;