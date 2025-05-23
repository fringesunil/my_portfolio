import React, { useState } from 'react';
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




function ProjectCard(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            name: 'MetaConsult',
            image: metaConsultImage,
            description: 'Developing mobile and web applications that serve as a bridge between doctors and patients, enhancing communication and empowering doctors to establish their digital presence. The applications enable seamless appointment scheduling, secure messaging, and easy access to medical records, all while maintaining the doctor\'s individual identity and privacy.',
            uiImages: [metaConsultUI1, metaConsultUI2, metaConsultUI3, metaConsultUI4, metaConsultUI5, metaConsultUI6, metaConsultUI7, metaConsultUI8]
        },
        {
            name: 'Hotaya',
            image: hotayaImage,
            description: 'Developing a comprehensive hotel booking application that provides users with a seamless and convenient experience for searching, booking, and managing hotel reservations. The app incorporates advanced search filters, real-time availability updates, secure payment integration, and personalized recommendations to enhance the user\'s hotel booking journey.',
            uiImages: [hotayaUI1,hotayaUI2,hotayaUI3,hotayaUI4,hotayaUI5,hotayaUI6,hotayaUI7,hotayaUI8,]
        },
        
        {
            name: 'Coyna',
            image: coynaImage,
            description: 'It\'s comprehensive Payment Mobile App that provides users can send or receive payments globally',
            uiImages: [coynaUI1,coynaUI2,coynaUI3,coynaUI4,coynaUI5]
        },
        { name: 'Equal Plus', 
            image: plusImage, 
            description: 'Equal Plus is a user-friendly mobile app designed to simplify billing for your shop. Effortlessly create quotations, sale return bills, and manage stock inventory. Generate bills anytime, anywhere without the need for a laptop. Easily share professional invoice PDFs via email or WhatsApp.',
             uiImages: [plusUI1,plusUI2,plusUI3,plusUI4,plusUI5,plusUI6,plusUI7] },
        { name: 'Equal POS', 
            image: plusImage,
             description: 'Equal POS is a Windows-based billing software designed for efficient shop management. It enables easy creation of sales bills and sales return bills, supports counter closing, and integrates with thermal printers for seamless bill printing.',
              uiImages: [posUI1,posUI2,posUI3,posUI4,posUI5,posUI6] },
        { name: 'Relief', 
            image: reliefImage, 
            description: 'It\'s a mobile app designed for delivery partners to efficiently track their assigned deliveries and navigate seamlessly to delivery locations.',
             uiImages: [reliefUI1,reliefUI2,reliefUI3,reliefUI4,reliefUI5] },
        { name: 'Club', 
            image: clubImage, 
            description: 'Club is a user-friendly mobile app designed for efficient club management. It enables receptionists to easily record guest visits, track event attendance, and monitor the maximum number of guests allowed per event. The app features customizable event scheduling and detailed attendance reports, providing club administrators with clear, data-driven insights. With its intuitive interface, Club streamlines operations and enhances the guest experience.',
             uiImages: [clubUI1,clubUI2,clubUI3,clubUI4,clubUI5,clubUI6,clubUI7] },
             { name: 'Insight-Pro', 
            image: insight, 
            description: 'Insight Pro: A powerful business management tool delivering real-time insights for multi-branch operations. Monitor live sales, inventory, expenses, and branch performance through an intuitive financial dashboard. Access comprehensive data, transaction history, and secure remote monitoring anytime, anywhere, empowering informed decision-making.',
             uiImages: [insight1,insight2,insight3,insight4,insight5] },
    ];

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
        <div>
            <h1 className='text-white px-4 sm:px-6 py-4 text-2xl sm:text-3xl font-extrabold'>Projects</h1>
            <div className="p-4 sm:p-6">
                <div className="max-w-full mx-auto h-[380px] sm:h-[430px] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#282828] rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-[#383838] transition-colors"
                                onClick={() => handleCardClick(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.name} logo`}
                                    className="w-full h-20 sm:h-24 py-1.5 object-contain"
                                />
                                <div className="p-3 sm:p-4">
                                    <h3 className="text-base sm:text-lg font-bold text-white text-center">{project.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#282828] p-4 sm:p-6 rounded-lg w-[90%] sm:w-[60rem] h-auto sm:h-[40rem] mx-4 overflow-y-auto custom-scrollbar">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg sm:text-xl font-bold text-white">{selectedProject?.name}</h2>
                            <button
                                onClick={handleCloseDialog}
                                className="text-white hover:text-gray-300 text-xl sm:text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <img
                                src={selectedProject?.image}
                                alt={`${selectedProject?.name} logo`}
                                className="w-full sm:w-1/3 h-24 sm:h-32 object-contain mb-4"
                            />
                            <p className="text-white text-sm sm:text-base mb-4">{selectedProject?.description}</p>
                        </div>

                        {selectedProject?.uiImages.length > 0 ? (
                            <div className="relative">
                                <div className="w-full h-[20rem] sm:h-[28rem] overflow-hidden rounded-lg">
                                    <img
                                        src={selectedProject.uiImages[currentSlide]}
                                        alt={`${selectedProject.name} UI ${currentSlide + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
                                >
                                    &#8249;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
                                >
                                    &#8250;
                                </button>
                                <div className="flex justify-center mt-2 gap-2">
                                    {selectedProject.uiImages.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-white text-sm sm:text-base">No UI images available</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;