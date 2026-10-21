import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  // react-hook-form initialization
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Async submit handler
  const onSubmit = async (data) => {
    try {
      // Web3Forms API endpoint (Free & No Backend Required)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '248153fc-74f6-4736-8032-4723a3a9ea46', 
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for reaching out! Your message has been sent successfully.');
        reset(); // Form inputs clear karne ke liye
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Failed to send message. Please check your internet connection.');
    }
  };

  return (
    <div id="contact" className="w-full bg-slate-50 text-slate-200">
      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold tracking-widest text-violet-600 uppercase border-b-2 border-violet-600 pb-1 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 mt-3 tracking-tight">
              Contact Me
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-3 max-w-xl mx-auto">
              Have a project in mind, a question, or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information (2 Columns) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  I am open to full-time roles, freelance projects, and teaching opportunities. Drop a message or send an email directly!
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-bold">
                      ✉
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                      <a href="mailto:itszaidsidd@gmail.com" className="text-slate-900 font-medium hover:text-violet-600 transition-colors">
                        itszaidsidd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-bold">
                      📍
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</p>
                      <p className="text-slate-900 font-medium">Uttar Pradesh, India</p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                      💼
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</p>
                      <p className="text-emerald-600 font-medium">Available for Hire & Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form with react-hook-form (3 Columns) */}
            <div className="lg:col-span-3 bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full bg-slate-50 border ${
                        errors.name ? 'border-red-500' : 'border-slate-200'
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-600 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`w-full bg-slate-50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-200'
                      } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-600 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full bg-slate-50 border ${
                      errors.subject ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-600 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters long',
                      },
                    })}
                    className={`w-full bg-slate-50 border ${
                      errors.message ? 'border-red-500' : 'border-slate-200'
                    } rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-600 transition-colors resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;