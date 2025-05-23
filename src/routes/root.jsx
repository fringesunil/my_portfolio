import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Root(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#121212] min-h-screen flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4 sm:px-0">
      <div className="mt-4 sm:mt-[4rem] h-auto sm:h-[34rem] w-full sm:w-[15rem] bg-[#1e1e1e] rounded-[16px] flex flex-col items-center">
        <div className="flex-col p-4 sm:p-6 space-y-4 w-full">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/drinn62yk/image/upload/v1733654995/jd8boeeapl9yri8zqyuw.jpg"
              alt="Profile"
              className="rounded-[20px] w-24 sm:w-32 h-24 sm:h-32 object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Fringe Sunil</h2>
            <p className="text-gray-300 text-sm sm:text-base">Flutter Developer</p>
          </div>
          <div className="border-t border-gray-500 my-4"></div>
          <div className="space-y-3 flex flex-col items-center">
            <div className="text-gray-300 text-center text-sm sm:text-base">
              <span>fringeks011@gmail.com</span>
            </div>
            <div className="text-gray-300 text-center text-sm sm:text-base">
              <span>+91-9961857227</span>
            </div>
            <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
              <a
                href="https://www.linkedin.com/in/fringe-sunil-897053164/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 text-lg sm:text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/fringesunil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500 text-lg sm:text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/fringeks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-lg sm:text-xl"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1QDhe5yDQMp33YoribhUlR7wz3duv8qSz/view?usp=sharing')}
                className="bg-[#282828] text-gray-300 hover:text-cyan-400 text-sm sm:text-base font-medium px-4 py-2 rounded-[8px] transition-colors duration-200"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative mt-4 sm:mt-[4rem] h-auto sm:h-[34rem] w-full sm:w-[52rem] bg-[#1e1e1e] rounded-[16px]">
        <div className="absolute top-0 right-0 bg-[#282828] h-[3rem] sm:h-[3.5rem] w-full sm:w-[30rem] text-white px-4 sm:px-6 
          rounded-bl-[16px] rounded-tr-[16px] sm:rounded-tl-0 shadow-md flex items-center justify-around overflow-x-auto">
          <span className="text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2" onClick={() => navigate('/')}>About</span>
          <span className="text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2" onClick={() => navigate('/experience')}>Experience</span>
          <span className="text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2" onClick={() => navigate('/skills')}>Skills</span>
          <span className="text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2" onClick={() => navigate('/projects')}>Projects</span>
          <span className="text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap px-2" onClick={() => navigate('/contact')}>Contact</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;