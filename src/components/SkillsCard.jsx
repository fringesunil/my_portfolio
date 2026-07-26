import React, { useState } from 'react';
import { FaMobileAlt, FaServer, FaCode, FaPaintBrush } from 'react-icons/fa';

function SkillsCard(props) {
    const skillCategories = [
        {
            category: "Mobile & Core Engineering",
            icon: FaMobileAlt,
            skills: ["Dart", "Flutter", "API Integration", "Provider", "Getx", "Push Notifications", "Android Native"]
        },
        {
            category: "Backend & Cloud Services",
            icon: FaServer,
            skills: ["Firebase", "MongoDB", "Express.js", "Node.js"]
        },
        {
            category: "Web & Frontend Development",
            icon: FaCode,
            skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"]
        },
        {
            category: "Design & Tools",
            icon: FaPaintBrush,
            skills: ["Figma"]
        }
    ];

    const allSkills = ["Dart", "Flutter", "API Integration", "Firebase", "Provider", "Getx", "Push Notifications", "Android Native", "MongoDB", "Express.js", "React.js", "Node.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Figma"];

    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="h-8 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Technical Skills</h1>
                </div>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium pl-4">Technologies, frameworks & specialized toolkit</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-2">
                <button
                    onClick={() => setActiveTab('All')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        activeTab === 'All'
                            ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold'
                            : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white hover:bg-slate-800'
                    }`}
                >
                    All Skills ({allSkills.length})
                </button>
                {skillCategories.map((cat) => (
                    <button
                        key={cat.category}
                        onClick={() => setActiveTab(cat.category)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                            activeTab === cat.category
                                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold'
                                : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        {cat.category.split(' ')[0]}
                    </button>
                ))}
            </div>

            {/* Categorized Skills Display */}
            <div className="space-y-6">
                {skillCategories
                    .filter(cat => activeTab === 'All' || activeTab === cat.category)
                    .map((cat, idx) => {
                        const IconComponent = cat.icon;
                        return (
                            <div key={idx} className="glass-card rounded-2xl p-5 border border-white/10 bg-slate-900/40 space-y-4">
                                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm sm:text-base border-b border-white/5 pb-3">
                                    <IconComponent className="text-lg" />
                                    <span>{cat.category}</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
                                    {cat.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="glass-card-hover rounded-xl px-3.5 py-2.5 border border-white/10 bg-slate-900/80 flex items-center gap-2.5 group cursor-default"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 shadow-[0_0_8px_#06b6d4] transition-transform" />
                                            <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default SkillsCard;