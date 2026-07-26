import React from 'react';
import udemyImage from '../assets/udemy.png';
import illiniosImage from '../assets/illinois.png';
import { FaExternalLinkAlt, FaAward, FaLaptopCode, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

function AboutmeCard(props) {
    const certificateUrl = "https://udemy-certificate.s3.amazonaws.com/image/UC-cc8766a5-f82c-41f0-bb31-06b1222a0116.jpg?v=1692689907000";
    const illioniscrtificateurl = "https://www.credly.com/badges/7df6d75e-62b9-43bc-b8c6-3f0dbe8f2b73/linked_in_profile";

    const udemyCertificateClick = () => {
        window.open(certificateUrl, '_blank');
    };
    const illioniosCertificateClick = () => {
        window.open(illioniscrtificateurl, '_blank');
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="h-8 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">About Me</h1>
                </div>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium pl-4">Engineering high-performance mobile & web solutions</p>
            </div>

            {/* Bio Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 border border-white/10 relative overflow-hidden bg-slate-900/60 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    Experienced <span className="text-cyan-300 font-semibold">Software Engineer</span> specializing in mobile application development with the <span className="text-cyan-300 font-semibold">Flutter</span> framework and Dart programming language. Certified <span className="text-cyan-300 font-semibold">MERN (MongoDB, Express.js, React.js, Node.js)</span> Stack Developer with expertise in full-stack web development.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mt-4">
                    Skilled in seamlessly integrating backend services with <span className="text-cyan-300 font-semibold">Firebase & RESTful APIs</span>, handling complex JSON datasets, state management architectures, and maintaining scalable codebase standards via modern Git workflows.
                </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors">
                    <FaMobileAlt className="text-cyan-400 text-xl mb-2" />
                    <span className="text-xl sm:text-2xl font-bold text-white">4+ Yrs</span>
                    <span className="text-xs text-slate-400 mt-1">Flutter Experience</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors">
                    <FaLaptopCode className="text-cyan-400 text-xl mb-2" />
                    <span className="text-xl sm:text-2xl font-bold text-white">11+</span>
                    <span className="text-xs text-slate-400 mt-1">Production Apps</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 col-span-2 sm:col-span-1 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors">
                    <FaLayerGroup className="text-cyan-400 text-xl mb-2" />
                    <span className="text-xl sm:text-2xl font-bold text-white">MERN</span>
                    <span className="text-xs text-slate-400 mt-1">Full Stack Certified</span>
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <FaAward className="text-cyan-400 text-xl" />
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Udemy Certification */}
                    <div
                        className="glass-card-hover rounded-2xl p-4 sm:p-5 border border-white/10 bg-slate-900/60 flex items-center gap-4 cursor-pointer group"
                        onClick={udemyCertificateClick}
                        title="Click to view official certificate"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 p-2 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                            <img
                                src={udemyImage}
                                alt="Udemy logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-semibold text-cyan-400">Udemy Certified</span>
                                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-slate-100 mt-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                                Complete Flutter Development Bootcamp with Dart
                            </h3>
                        </div>
                    </div>

                    {/* Illinois Certification */}
                    <div
                        className="glass-card-hover rounded-2xl p-4 sm:p-5 border border-white/10 bg-slate-900/60 flex items-center gap-4 cursor-pointer group"
                        onClick={illioniosCertificateClick}
                        title="Click to view official badge"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 p-2 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                            <img
                                src={illiniosImage}
                                alt="Illinois logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-semibold text-cyan-400">Professional Certificate</span>
                                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-slate-100 mt-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                                Full Stack Development (MERN Stack)
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutmeCard;