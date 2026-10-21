import React from 'react';

const About = () => {
  const languages = ['Java', 'Python', 'C', 'C++', 'JavaScript'];
  const devSkills = [
    'React',
    'Spring Boot',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'Node.js',
    'Express.js',
  ];
  const dbTools=['MySQL','Oracle','MongoDB','Git','Vercel','Render',]

  return (
    <section id="about" className="bg-slate-50 min-h-screen w-full py-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Section: Info & Skills */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          
          {/* Header */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase border-b-2 border-blue-600 pb-1 inline-block">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-3 tracking-tight">
              MOHD ZAID
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 mt-2">
              Full Stack Developer | MCA Student
            </p>
            <p className="text-slate-500 italic text-base sm:text-lg mt-1">
              Dr. A.P.J. Abdul Kalam Technical University, India
            </p>
          </div>

          <hr className="border-slate-200 my-4" />

          {/* Short Bio */}
          <p className="bg-white border-l-4 border-blue-600 text-slate-700 text-base sm:text-lg leading-relaxed rounded-r-xl p-5 sm:p-6 shadow-sm my-4">
            I am a passionate software developer currently pursuing my Master of Computer Applications (MCA). With a solid foundation from my BCA degree, I specialize in building modern web applications, scalable backend systems, and solving complex computing problems.
          </p>

          <hr className="border-slate-200 my-4" />

          {/* Technical Expertise */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide mb-6">
              Technical Expertise
            </h2>

            {/* Languages */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-slate-600 uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {languages.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-slate-800 border border-slate-200 shadow-sm font-medium text-sm sm:text-base rounded-full py-2 px-5 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className='mb-6'>
              <h3 className="text-base font-semibold text-slate-600 uppercase tracking-wider mb-3">
                Development
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {devSkills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-slate-800 border border-slate-200 shadow-sm font-medium text-sm sm:text-base rounded-full py-2 px-5 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Databases & Tools */}
            <div>
              <h3 className="text-base font-semibold text-slate-600 uppercase tracking-wider mb-3">
                Database & Tools
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {dbTools.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-slate-800 border border-slate-200 shadow-sm font-medium text-sm sm:text-base rounded-full py-2 px-5 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Section: Profile Image Container */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-blue-600 p-2 shadow-2xl bg-white flex justify-center items-center">
            {/* Jab aapke paas image ho, to <img> tag use karein */}
            <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-medium">
              Profile Photo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;