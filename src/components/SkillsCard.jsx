import React from 'react';

function SkillsCard(props) {
    const skills = ["Dart", "Flutter", "API Integration", "Firebase", "Provider", "Getx", "Push Notifications", "Android Native", "Mongodb", "Express.js", "React.js", "Node.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Figma"];

    return (
        <div>
            <h1 className='text-white px-4 sm:px-6 py-4 text-2xl sm:text-3xl font-extrabold'>Skills</h1>
            <div className='m-3 sm:m-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[#282828] rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 min-h-[36px] sm:min-h-[40px] w-full text-center"
                    >
                        <span className="text-cyan-400 text-sm sm:text-base whitespace-nowrap">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCard;