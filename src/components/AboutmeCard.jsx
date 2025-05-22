import React from 'react';
import udemyImage from '../assets/udemy.png';
import illiniosImage from '../assets/illinois.png';

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
        <div>
            <h1 className='text-white px-4 sm:px-6 py-4 text-2xl sm:text-3xl font-extrabold'>About Me</h1>
            <div className='m-3 sm:m-5'>
                <span className='text-white text-sm sm:text-base'>
                    Experienced Software Engineer with a focus on Dart programming language and a specialization in mobile application development utilizing the Flutter framework. Certified MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer with expertise in full-stack web development. Skilled in seamlessly integrating backend functionality through Firebase, demonstrating a deep understanding of RESTful APIs and proficiency in handling JSON data formats. Well-versed in version control systems like Git and GitHub, ensuring effective collaboration and streamlined code management.
                </span>
            </div>
            <h2 className='text-white px-4 sm:px-6 py-2 text-xl sm:text-2xl font-extrabold'>Certification</h2>
            <div className='m-3 sm:m-5 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div
                    className="bg-[#282828] rounded-lg px-3 py-1.5 min-h-[8rem] sm:min-h-[10rem] w-full flex flex-row cursor-pointer hover:bg-[#383838] transition-colors"
                    onClick={udemyCertificateClick}
                    title="Click to view certificate"
                >
                    <div className='text-white w-[5rem] sm:w-[6rem] pt-4 sm:pt-6'>
                        <img
                            src={udemyImage}
                            alt="Udemy logo"
                            className="w-full h-16 sm:h-24 object-contain"
                        />
                    </div>
                    <div className='text-white w-full sm:w-[14rem] pt-6 sm:pt-9'>
                        <h1 className="text-sm sm:text-base">The Complete Flutter Development Bootcamp with Dart</h1>
                    </div>
                </div>
                <div
                    className="bg-[#282828] rounded-lg px-3 py-1.5 min-h-[8rem] sm:min-h-[10rem] w-full flex flex-row cursor-pointer hover:bg-[#383838] transition-colors"
                    onClick={illioniosCertificateClick}
                    title="Click to view certificate"
                >
                    <div className='text-white w-[5rem] sm:w-[6rem] pt-4 sm:pt-6'>
                        <img
                            src={illiniosImage}
                            alt="Illinois logo"
                            className="w-full h-16 sm:h-24 object-contain"
                        />
                    </div>
                    <div className='text-white w-full sm:w-[14rem] pt-6 sm:pt-9 px-2'>
                        <h1 className="text-sm sm:text-base">Full stack development (MERN stack)</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutmeCard;