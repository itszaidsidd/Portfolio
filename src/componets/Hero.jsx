import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-950 flex items-center justify-between overflow-hidden px-6 sm:px-12 lg:px-20 py-16 lg:py-0">
      
      {/* Background Accent Glow (Optional Decorative Element) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10">
        
        {/* Left Content */}
        <div className="left flex flex-col items-start gap-6 w-full lg:w-3/5 text-left">
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-sm font-semibold tracking-wide">
            WELCOME TO MY PORTFOLIO
          </div>

          <p className="text-gray-400 text-lg sm:text-2xl font-bold tracking-wider uppercase">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none">
            MOHD ZAID
          </h1>

          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white border-b-4 border-violet-600 pb-4 inline-block">
              FULL STACK DEVELOPER <span className="text-gray-400 font-light">&</span> TEACHER
            </h2>
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Building scalable web applications, modern interactive UIs, and helping developers master core computing concepts.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </a>

            <a
              href="#about"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-gray-300 hover:text-white font-bold text-lg rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              About Me
            </a>
          </div>

        </div>

        {/* Right Graphic / Photo Container */}
        <div className="right w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[480px] bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl flex items-center justify-center overflow-hidden group">
            
            {/* Inner Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            {/* Image Placeholder */}
            <div className="w-full h-full bg-slate-800/80 rounded-2xl flex flex-col items-center justify-center text-slate-500 font-medium border border-slate-700/50">
              <span className="text-lg">Profile Photo / Illustration</span>
            </div>
            
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;