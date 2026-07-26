import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaGooglePlay, FaApple, FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import metaConsultImage from '../assets/logo.png';
import hotayaImage from '../assets/hotayalogo.png';
import coynaImage from '../assets/coyna.png';
import reliefImage from '../assets/relief.png';
import plusImage from '../assets/plus.png';
import clubImage from '../assets/club.png';
import metaConsultUI1 from '../assets/meta1.png';
import metaConsultUI2 from '../assets/meta2.png';
import metaConsultUI3 from '../assets/meta3.png';
import metaConsultUI4 from '../assets/meta4.png';
import metaConsultUI5 from '../assets/meta5.png';
import metaConsultUI6 from '../assets/meta6.png';
import metaConsultUI7 from '../assets/meta7.png';
import metaConsultUI8 from '../assets/meta8.png';
import hotayaUI1 from '../assets/hotayaui1.png';
import hotayaUI2 from '../assets/hotayaui2.png';
import hotayaUI3 from '../assets/hotayaui3.png';
import hotayaUI4 from '../assets/hotayaui4.png';
import hotayaUI5 from '../assets/hotayaui5.png';
import hotayaUI6 from '../assets/hotayaui6.png';
import hotayaUI7 from '../assets/hotayaui7.png';
import hotayaUI8 from '../assets/hotayaui8.png';
import coynaUI1 from '../assets/coyna1.png';
import coynaUI2 from '../assets/coyna2.png';
import coynaUI3 from '../assets/coyna3.png';
import coynaUI4 from '../assets/coyna4.png';
import coynaUI5 from '../assets/coyna5.png';
import plusUI1 from '../assets/plus1.png';
import plusUI2 from '../assets/plus2.png';
import plusUI3 from '../assets/plus3.png';
import plusUI4 from '../assets/plus4.png';
import plusUI5 from '../assets/plus5.png';
import plusUI6 from '../assets/plus6.png';
import plusUI7 from '../assets/plus7.png';
import posUI1 from '../assets/pos1.png';
import posUI2 from '../assets/pos2.png';
import posUI3 from '../assets/pos3.png';
import posUI4 from '../assets/pos4.png';
import posUI5 from '../assets/pos5.png';
import posUI6 from '../assets/pos6.png';
import reliefUI1 from '../assets/relief1.png';
import reliefUI2 from '../assets/relief2.png';
import reliefUI3 from '../assets/relief3.png';
import reliefUI4 from '../assets/relief4.png';
import reliefUI5 from '../assets/relief5.png';
import clubUI1 from '../assets/club1.png';
import clubUI2 from '../assets/club2.png';
import clubUI3 from '../assets/club3.png';
import clubUI4 from '../assets/club4.png';
import clubUI5 from '../assets/club5.png';
import clubUI6 from '../assets/club6.png';
import clubUI7 from '../assets/club7.png';
import insight from '../assets/insight.png';
import insight1 from '../assets/insight1.png';
import insight2 from '../assets/insight2.png';
import insight3 from '../assets/insight3.png';
import insight4 from '../assets/insight4.png';
import insight5 from '../assets/insight5.png';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.png';
import partner8 from '../assets/partner8.png';
import partner9 from '../assets/partner9.png';
import Eqserv from '../assets/Eqserv.png';
import Eqserv1 from '../assets/Eqserv1.png';
import Eqserv2 from '../assets/Eqserv2.png';
import Eqserv3 from '../assets/Eqserv3.png';
import Eqserv4 from '../assets/Eqserv4.png';
import Eqserv5 from '../assets/Eqserv5.png';
import Eqserv6 from '../assets/Eqserv6.png';
import Eqserv7 from '../assets/Eqserv7.png';
import Eqserv8 from '../assets/Eqserv8.png';
import Eqserv9 from '../assets/Eqserv9.png';
import Eqserv10 from '../assets/Eqserv10.png';
import Beauty from '../assets/beauty.png';
import Beauty1 from '../assets/beauty1.png';
import Beauty2 from '../assets/beauty2.png';
import Beauty3 from '../assets/beauty3.png';
import Beauty4 from '../assets/beauty4.png';
import Beauty5 from '../assets/beauty5.png';
import Beauty6 from '../assets/beauty6.png';
import Beauty7 from '../assets/beauty7.png';





function ProjectCard(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            name: 'MetaConsult',
            image: metaConsultImage,
            description: 'Developing mobile and web applications that serve as a bridge between doctors and patients, enhancing communication and empowering doctors to establish their digital presence. The applications enable seamless appointment scheduling, secure messaging, and easy access to medical records, all while maintaining the doctor\'s individual identity and privacy.',
            uiImages: [metaConsultUI1, metaConsultUI2, metaConsultUI3, metaConsultUI4, metaConsultUI5, metaConsultUI6, metaConsultUI7, metaConsultUI8],
            playStore: 'https://play.google.com/store/apps/details?id=com.metaconsult',
        },
        {
            name: 'Hotaya',
            image: hotayaImage,
            description: 'Developing a comprehensive hotel booking application that provides users with a seamless and convenient experience for searching, booking, and managing hotel reservations. The app incorporates advanced search filters, real-time availability updates, secure payment integration, and personalized recommendations to enhance the user\'s hotel booking journey.',
            uiImages: [hotayaUI1, hotayaUI2, hotayaUI3, hotayaUI4, hotayaUI5, hotayaUI6, hotayaUI7, hotayaUI8,],
            playStore: 'https://play.google.com/store/apps/details?id=com.app.hotaya',
        },
        {
            name: 'Hotaya-Partner',
            image: hotayaImage,
            description: 'Hotaya Partner App: Streamline your property management with Hotaya, an all-in-one platform for listing hotels, apartments, and properties for booking. Offer guests a seamless reservation experience with real-time availability, secure payments, and detailed listings. Featuring personalized recommendations, interactive maps, and 24/7 support, Hotaya connects property owners with travelers worldwide, ensuring hassle-free bookings and memorable stays.',
            uiImages: [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9],
            playStore: 'https://play.google.com/store/apps/details?id=com.hotaya.partner',
            appStore: 'https://apps.apple.com/ua/app/hotaya-partner/id6467189108'
        },
        {
            name: 'Coyna',
            image: coynaImage,
            description: 'It\'s comprehensive Payment Mobile App that provides users can send or receive payments globally',
            uiImages: [coynaUI1, coynaUI2, coynaUI3, coynaUI4, coynaUI5]
        },
        {
            name: 'Equal Plus',
            image: plusImage,
            description: 'Equal Plus is a user-friendly mobile app designed to simplify billing for your shop. Effortlessly create quotations, sale return bills, and manage stock inventory. Generate bills anytime, anywhere without the need for a laptop. Easily share professional invoice PDFs via email or WhatsApp.',
            uiImages: [plusUI1, plusUI2, plusUI3, plusUI4, plusUI5, plusUI6, plusUI7],
            playStore: 'https://play.google.com/store/apps/details?id=com.eqsoftonline.equalplus&hl=en_IN',
        },
        {
            name: 'Equal POS',
            image: plusImage,
            description: 'Equal POS is a Windows-based billing software designed for efficient shop management. It enables easy creation of sales bills and sales return bills, supports counter closing, and integrates with thermal printers for seamless bill printing.',
            uiImages: [posUI1, posUI2, posUI3, posUI4, posUI5, posUI6]
        },
        {
            name: 'Relief',
            image: reliefImage,
            description: 'It\'s a mobile app designed for delivery partners to efficiently track their assigned deliveries and navigate seamlessly to delivery locations.',
            uiImages: [reliefUI1, reliefUI2, reliefUI3, reliefUI4, reliefUI5]
        },
        {
            name: 'Club',
            image: clubImage,
            description: 'Club is a user-friendly mobile app designed for efficient club management. It enables receptionists to easily record guest visits, track event attendance, and monitor the maximum number of guests allowed per event. The app features customizable event scheduling and detailed attendance reports, providing club administrators with clear, data-driven insights. With its intuitive interface, Club streamlines operations and enhances the guest experience.',
            uiImages: [clubUI1, clubUI2, clubUI3, clubUI4, clubUI5, clubUI6, clubUI7]
        },
        {
            name: 'Insight-Pro',
            image: insight,
            description: 'Insight Pro: A powerful business management tool delivering real-time insights for multi-branch operations. Monitor live sales, inventory, expenses, and branch performance through an intuitive financial dashboard. Access comprehensive data, transaction history, and secure remote monitoring anytime, anywhere, empowering informed decision-making.',
            uiImages: [insight1, insight2, insight3, insight4, insight5],
            playStore: 'https://play.google.com/store/apps/details?id=com.eqsoftonline.live_app&hl=en_IN',
        },
        {
            name: 'Equal Serve',
            image: Eqserv,
            description: 'Equal Serve is a comprehensive mobile solution designed specifically for laundry collection representatives to streamline the order management and item tracking process. The application enables field staff to generate digital job cards instantly during doorstep pickups, ensuring that every garment is accurately recorded and tracked to prevent any loss of customer items. Beyond collection, the app simplifies financial management by allowing representatives to generate bills, monitor transaction histories, and keep a precise record of outstanding balances in real time. By bridging the gap between field operations and the main facility, Equal Serve empowers laundry businesses with a secure, intuitive tool for maintaining accountability and enhancing customer trust.',
            uiImages: [Eqserv1, Eqserv2, Eqserv3, Eqserv4, Eqserv5, Eqserv6, Eqserv7, Eqserv8, Eqserv9, Eqserv10]
        },
        {
            name: 'Beauty Salon',
            image: Beauty,
            description: 'Beauty Salon is an all-in-one salon management and appointment booking app designed for beauty businesses. It helps salons manage bookings, customers, staff, services, and billing in one simple platform. With an easy-to-use interface, real-time appointment tracking, and smart business insights,Beauty Salon streamlines daily salon operations and improves customer experience.',
            uiImages: [Beauty1, Beauty2, Beauty3, Beauty4, Beauty5, Beauty6, Beauty7],
            playStore: 'https://play.google.com/store/apps/details?id=com.eqsoftonline.beautysync&hl=en_IN',
            appStore: 'https://apps.apple.com/in/app/beauty-sync-eqsoft/id6764538165'
        },
    ];

    const modalRef = useRef(null);

    useEffect(() => {
        if (isDialogOpen) {
            document.body.style.overflow = 'hidden';
            if (modalRef.current) {
                modalRef.current.scrollTop = 0;
            }
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isDialogOpen]);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setCurrentSlide(0);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedProject(null);
    };

    const nextSlide = () => {
        if (selectedProject && selectedProject.uiImages.length > 0) {
            setCurrentSlide((prev) =>
                prev === selectedProject.uiImages.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevSlide = () => {
        if (selectedProject && selectedProject.uiImages.length > 0) {
            setCurrentSlide((prev) =>
                prev === 0 ? selectedProject.uiImages.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header Section */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="h-8 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Featured Projects</h1>
                </div>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium pl-4">Showcase of mobile applications</p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-card-hover rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden cursor-pointer group flex flex-col justify-between p-4 relative"
                        onClick={() => handleCardClick(project)}
                    >
                        {/* Store Badge Indicators */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {project.appStore ? 'iOS & Android' : 'Flutter App'}
                            </span>
                            <div className="flex items-center gap-1 text-slate-400">
                                {project.playStore && <FaGooglePlay className="text-xs hover:text-emerald-400 transition-colors" />}
                                {project.appStore && <FaApple className="text-xs hover:text-white transition-colors" />}
                            </div>
                        </div>

                        {/* Image Logo Container */}
                        <div className="w-full h-28 sm:h-32 2xl:h-36 rounded-xl bg-slate-950/60 border border-white/5 p-3 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors my-2">
                            <img
                                src={project.image}
                                alt={`${project.name} logo`}
                                className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>

                        {/* Title & Click Prompt */}
                        <div className="pt-2 flex items-center justify-between">
                            <h3 className="text-base 2xl:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                                {project.name}
                            </h3>
                            <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                View Details &rarr;
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Dialog Modal via React Portal */}
            {isDialogOpen && selectedProject && createPortal(
                <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-start sm:items-center justify-center z-[9999] p-2 pt-3 sm:p-6 2xl:p-10 animate-fadeIn">
                    <div ref={modalRef} className="glass-card rounded-2xl border border-white/10 bg-slate-900/95 w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[94vh] sm:max-h-[92vh] overflow-y-auto custom-scrollbar p-3.5 sm:p-7 2xl:p-9 shadow-2xl relative space-y-3.5 sm:space-y-6">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h2 className="text-lg sm:text-2xl 2xl:text-3xl font-extrabold text-white truncate">{selectedProject.name}</h2>

                                    {/* Store Direct Links */}
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        {selectedProject.playStore && (
                                            <a
                                                href={selectedProject.playStore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs 2xl:text-sm font-semibold hover:bg-emerald-500/20 transition-colors flex items-center gap-1"
                                                title="Open Play Store"
                                            >
                                                <FaGooglePlay className="text-[10px] sm:text-xs" />
                                                <span className="hidden xs:inline sm:inline">Play Store</span>
                                            </a>
                                        )}
                                        {selectedProject.appStore && (
                                            <a
                                                href={selectedProject.appStore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-white text-[11px] sm:text-xs 2xl:text-sm font-semibold hover:bg-white/20 transition-colors flex items-center gap-1"
                                                title="Open App Store"
                                            >
                                                <FaApple className="text-[10px] sm:text-xs" />
                                                <span className="hidden xs:inline sm:inline">App Store</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={handleCloseDialog}
                                className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                                title="Close modal"
                            >
                                <FaTimes className="text-sm sm:text-base 2xl:text-lg" />
                            </button>
                        </div>

                        {/* Logo & Description Container */}
                        <div className="flex gap-3 sm:gap-5 items-start bg-slate-950/60 p-3 sm:p-4 2xl:p-6 rounded-xl border border-white/5">
                            <div className="w-14 h-14 sm:w-36 2xl:w-44 sm:h-28 2xl:h-36 shrink-0 rounded-xl bg-slate-900 p-2 sm:p-3 border border-white/10 flex items-center justify-center">
                                <img
                                    src={selectedProject.image}
                                    alt={`${selectedProject.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-slate-300 text-xs sm:text-sm 2xl:text-base leading-snug sm:leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </div>

                        {/* UI Screenshots Slideshow Carousel */}
                        {selectedProject.uiImages && selectedProject.uiImages.length > 0 ? (
                            <div className="space-y-2 sm:space-y-3">
                                <div className="flex items-center justify-between text-xs 2xl:text-sm font-semibold text-slate-400">
                                    <span>UI Screenshots</span>
                                    <span className="text-cyan-400 font-bold">{currentSlide + 1} / {selectedProject.uiImages.length}</span>
                                </div>

                                <div className="relative w-full h-[210px] sm:h-[380px] xl:h-[460px] 2xl:h-[520px] bg-slate-950 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-1.5 sm:p-2">
                                    <img
                                        src={selectedProject.uiImages[currentSlide]}
                                        alt={`${selectedProject.name} UI ${currentSlide + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                    />

                                    {/* Left / Right Nav Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/85 border border-white/10 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                                        title="Previous image"
                                    >
                                        <FaChevronLeft className="text-[10px] sm:text-xs" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/85 border border-white/10 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg"
                                        title="Next image"
                                    >
                                        <FaChevronRight className="text-[10px] sm:text-xs" />
                                    </button>
                                </div>

                                {/* Thumbnail Strip */}
                                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto custom-scrollbar py-1">
                                    {selectedProject.uiImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentSlide === idx
                                                ? 'border-cyan-400 ring-2 ring-cyan-400/40 opacity-100 scale-105'
                                                : 'border-transparent opacity-50 hover:opacity-100'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumb ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}

export default ProjectCard;