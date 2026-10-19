import React from 'react';
import { FaCalendarAlt, FaBuilding, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

function ExperienceCard(props) {
    const experiences = [
        {
            role: "Software Engineer II (Flutter)",
            company: "GramPro Business Services Pvt. Ltd",
            period: "May 2026 — Present",
            location: "Thrissur, India",
            isCurrent: true,
            bullets: [
                "Configuring, testing, and hosting iOS applications on the Apple App Store as Custom Apps via Apple Business Manager (ABM).",
                "Ensuring total app compatibility with iOS devices, performance testing, and App Store submission compliance.",
                "Implemented TensorFlow (tflite) in Flutter applications for seamlessly integrating on-device AI model features.",
                "Engineering scalable cross-platform modules and building new feature enhancements for Flutter applications.",
                "Designing reusable custom UI widget libraries and maintaining clean API architecture."
            ]
        },
        {
            role: "Senior Flutter Developer",
            company: "EQ Soft Business Solution Pvt Ltd",
            period: "January 2024 — April 2026",
            location: "Kochi, India",
            isCurrent: false,
            bullets: [
                "Mentored junior Flutter developers, conducted code reviews, and enforced engineering best practices.",
                "Implemented application UI and developed reusable custom widgets to speed up application development.",
                "Created a custom widgets library with documentation and integrated it into applications for common UI components.",
                "Integrated third-party libraries to interact with back-end APIs seamlessly.",
                "Integrated custom common login features, secure authentication flows, and state management for background data updates."
            ]
        },
        {
            role: "Jr. Flutter Developer",
            company: "Digital Orbis Creators LLP",
            period: "June 2022 — October 2023",
            location: "Coimbatore, India",
            isCurrent: false,
            bullets: [
                "Engineered cross-platform mobile applications using Dart programming language and Flutter framework.",
                "Implemented iOS In-App Purchase (IAP) functionality for digital product purchases and subscription management.",
                "Integrated secure payment gateways including Razorpay, Stripe, and TheTeller (theteller.net) for seamless global & local checkout.",
                "Integrated Firebase for backend services, authentication, cloud storage, and push notifications.",
                "Handled RESTful APIs integration and parsed complex JSON data formats efficiently.",
                "Applied Flutter widgets, mobile application design patterns, and state management techniques like Provider.",
                "Utilized version control systems (Git, GitHub) for collaborative code management and team development."
            ]
        },
        {
            role: "Team Lead",
            company: "Soldat Global Technologies",
            period: "October 2020 — May 2022",
            location: "Coimbatore, India",
            isCurrent: false,
            bullets: [
                "Managed a team of 8 customer service representatives and ensured they met individual targets and performance metrics.",
                "Conducted regular coaching sessions, performance evaluations, and provided feedback to enhance team skills.",
                "Maintained a high level of customer satisfaction by addressing customer complaints and concerns promptly and effectively.",
                "Coordinated with other departments to ensure the smooth flow of operations and service delivery.",
                "Prepared and submitted reports on team performance, productivity, and key metrics to upper management.",
                "Maintained accurate records of customer interactions and transactions in the CRM system."
            ]
        },
        {
            role: "Process Associate",
            company: "Job Store Consulting",
            period: "February 2018 — September 2020",
            location: "Coimbatore, India",
            isCurrent: false,
            bullets: [
                "Provided customer support via phone, email, and chat, resolving inquiries in a timely and efficient manner.",
                "Maintained accurate and up-to-date customer records in database systems.",
                "Ensured customer satisfaction by meeting and exceeding expectations consistently.",
                "Collaborated with team members to meet organizational productivity and quality targets.",
                "Identified opportunities for process improvement and made recommendations to management."
            ]
        }
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="h-8 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Work Experience</h1>
                </div>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium pl-4">Career journey & key professional achievements</p>
            </div>

            {/* Timeline Layout */}
            <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8">
                {/* Vertical Trace Line */}
                <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-teal-500/50 to-slate-800" />

                {experiences.map((exp, index) => (
                    <div key={index} className="relative group">
                        {/* Timeline Node */}
                        <div className={`absolute -left-[23px] sm:-left-[27px] top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            exp.isCurrent
                                ? 'border-cyan-400 bg-cyan-400/20 shadow-[0_0_12px_#06b6d4]'
                                : 'border-slate-600 bg-slate-900 group-hover:border-cyan-400 group-hover:bg-cyan-500/20'
                        }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500 group-hover:bg-cyan-400'}`} />
                        </div>

                        {/* Experience Content Card */}
                        <div className="glass-card-hover rounded-2xl p-5 border border-white/10 bg-slate-900/60 shadow-xl space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium mt-1">
                                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                                            <FaBuilding className="text-xs" />
                                            {exp.company}
                                        </span>
                                        {exp.location && (
                                            <span className="flex items-center gap-1 text-slate-400 text-xs">
                                                <FaMapMarkerAlt className="text-xs text-slate-500" />
                                                {exp.location}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold self-start sm:self-auto shrink-0">
                                    <FaCalendarAlt className="text-xs" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            {/* Resume Bullet Points */}
                            <ul className="space-y-2 pt-1">
                                {exp.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                                        <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0 opacity-80" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceCard;