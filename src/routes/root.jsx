import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaUser, FaBriefcase, FaCode, FaLayerGroup, FaEnvelope, FaDownload, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';

function Root(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About', icon: FaUser },
    { path: '/experience', label: 'Experience', icon: FaBriefcase },
    { path: '/skills', label: 'Skills', icon: FaCode },
    { path: '/projects', label: 'Projects', icon: FaLayerGroup },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col items-center justify-center py-6 sm:py-12 px-4 overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Container Grid */}
      <div className="relative z-10 w-full max-w-[1240px] xl:max-w-[1380px] 2xl:max-w-[1540px] 3xl:max-w-[1720px] flex flex-col lg:flex-row gap-6 lg:gap-8 2xl:gap-10 items-start justify-center">
        
        {/* Left Sidebar Profile Card */}
        <aside className="w-full lg:w-[300px] xl:w-[320px] 2xl:w-[350px] shrink-0 glass-card rounded-2xl p-6 2xl:p-8 flex flex-col items-center shadow-2xl border border-white/10 relative overflow-hidden group">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600" />
          
          {/* Profile Image with Glow Ring */}
          <div className="relative mb-5 mt-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-sm group-hover:opacity-100 transition duration-500"></div>
            <img
              src="https://res.cloudinary.com/drinn62yk/image/upload/v1733654995/jd8boeeapl9yri8zqyuw.jpg"
              alt="Fringe Sunil"
              className="relative rounded-2xl w-28 h-28 sm:w-32 sm:h-32 2xl:w-36 2xl:h-36 object-cover border-2 border-slate-900 shadow-xl"
            />
          </div>

          {/* Name & Role */}
          <div className="text-center w-full">
            <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent tracking-tight">
              Fringe Sunil
            </h2>
            <div className="inline-block mt-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs 2xl:text-sm font-semibold tracking-wide">
              Flutter Developer
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent my-5" />

          {/* Contact Details */}
          <div className="w-full space-y-3 text-xs sm:text-sm 2xl:text-base">
            <a
              href="mailto:fringeks011@gmail.com"
              className="flex items-center gap-3 p-2.5 2xl:p-3 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 text-slate-300 hover:text-cyan-400 transition-all duration-200 group/item"
            >
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                <FaEnvelopeOpen className="text-sm 2xl:text-base" />
              </div>
              <span className="truncate">fringeks011@gmail.com</span>
            </a>

            <a
              href="tel:+919961857227"
              className="flex items-center gap-3 p-2.5 2xl:p-3 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 text-slate-300 hover:text-cyan-400 transition-all duration-200 group/item"
            >
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                <FaPhoneAlt className="text-sm 2xl:text-base" />
              </div>
              <span>+91-9961857227</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-3 mt-6 w-full">
            <a
              href="https://www.linkedin.com/in/fringe-sunil-897053164/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 2xl:p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg 2xl:text-xl" />
            </a>
            <a
              href="https://github.com/fringesunil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 2xl:p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="text-lg 2xl:text-xl" />
            </a>
            <a
              href="https://x.com/fringeks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 2xl:p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              title="Twitter (X)"
            >
              <FaTwitter className="text-lg 2xl:text-xl" />
            </a>
          </div>

          {/* Resume CTA Button */}
          <div className="w-full mt-6">
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1QDhe5yDQMp33YoribhUlR7wz3duv8qSz/view?usp=sharing')}
              className="w-full py-3 2xl:py-3.5 px-4 rounded-xl font-semibold text-sm 2xl:text-base bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-slate-950 hover:text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95"
            >
              <FaDownload className="text-xs 2xl:text-sm group-hover/btn:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </button>
          </div>
        </aside>

        {/* Right Main Glass Container & Top Navbar */}
        <main className="w-full flex-1 flex flex-col glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-h-[600px] lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px]">
          
          {/* Top Glass Navigation Bar */}
          <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 2xl:px-8 py-3 2xl:py-4 flex items-center justify-between overflow-x-auto custom-scrollbar">
            <nav className="flex items-center gap-1 sm:gap-2 2xl:gap-3 w-full justify-start sm:justify-end min-w-max">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`relative flex items-center gap-2 px-3.5 2xl:px-4 py-2 2xl:py-2.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <IconComponent className={`text-sm 2xl:text-base ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </header>

          {/* Content Pane */}
          <div className="flex-1 p-4 sm:p-8 xl:p-10 2xl:p-12 overflow-y-auto custom-scrollbar">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}

export default Root;