import React from 'react';

const Project = () => {
  const projectList = [
    {
      id: 1,
      title: 'Police Case Management System',
      description:
        'A comprehensive platform built to digitize case records, manage investigation workflows, and maintain structured records for law enforcement administration.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: '#',
      category: 'Full Stack Web App',
    },
    {
      id: 2,
      title: 'Interactive E-Learning & Quiz Platform',
      description:
        'An engaging education portal designed for students to take programming quizzes, track learning progress, and practice core concepts.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: '#',
      category: 'EdTech Platform',
    },
    {
      id: 3,
      title: 'Developer Portfolio & Resource Hub',
      description:
        'A fast, responsive, and minimalist developer portfolio showcasing technical projects, full stack skills, and interactive learning guides.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: 'https://github.com',
      liveLink: '#',
      category: 'Frontend Project',
    },
  ];

  return (
    <section id="projects" className="w-full bg-slate-950 text-slate-100 py-20 px-6 sm:px-12 lg:px-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-sm font-semibold tracking-widest text-violet-400 uppercase border-b-2 border-violet-500 pb-1 inline-block">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Here are some of the key web applications and full-stack solutions I have developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Card Header & Preview Placeholder */}
              <div>
                <div className="w-full h-48 bg-slate-800/80 border-b border-slate-800 relative overflow-hidden flex items-center justify-center text-slate-500 font-medium">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-70" />
                  <span className="group-hover:scale-105 transition-transform duration-300 z-0">
                    {project.title} Preview Image
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-800/90 text-slate-300 border border-slate-700/60 text-xs font-semibold px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 sm:p-8 pt-0 flex items-center gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors flex items-center gap-2"
                >
                  GitHub
                </a>
                
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-lg transition-colors flex items-center gap-2"
                >
                  Live Demo &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;