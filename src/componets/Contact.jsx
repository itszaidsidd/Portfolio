import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., EmailJS or backend API)
    alert('Thank you for reaching out! Your message has been received.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div id="contact" className="w-full bg-slate-950 text-slate-200">
      
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold tracking-widest text-violet-400 uppercase border-b-2 border-violet-500 pb-1 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
              Contact Me
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl mx-auto">
              Have a project in mind, a question, or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Information (2 Columns) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  I am open to full-time roles, freelance projects, and teaching opportunities. Drop a message or send an email directly!
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                      ✉
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Email</p>
                      <a href="mailto:contact@mohdzaid.dev" className="text-white font-medium hover:text-violet-400 transition-colors">
                        contact@mohdzaid.dev
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                      📍
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Location</p>
                      <p className="text-white font-medium">Uttar Pradesh, India</p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                      💼
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase">Status</p>
                      <p className="text-emerald-400 font-medium">Available for Hire & Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (3 Columns) */}
            <div className="lg:col-span-3 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300"
                >
                  Send Message &rarr;
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

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
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
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
  );
};

export default Contact;