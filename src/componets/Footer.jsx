import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <a href="#home" className="text-2xl font-black text-white tracking-wider uppercase">
                MOHD ZAID<span className="text-violet-600">.</span>
              </a>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Full Stack Developer & Educator building robust software solutions, backend APIs, and modern responsive frontend interfaces.
              </p>

              {/* Resume Download CTA */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-violet-400 border border-slate-800 hover:border-violet-500/50 text-sm font-semibold rounded-lg transition-all"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-violet-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-violet-400 transition-colors">About Me</a></li>
                <li><a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: Social Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
                Social Links
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="https://github.com/itszaidsidd" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/itszaidsidd" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-900 my-8" />

          {/* Bottom Footer Credit */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Mohd Zaid. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-violet-500">React</span> & <span className="text-violet-500">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
