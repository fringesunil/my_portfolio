import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

function ContactForm(props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
 
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);

    const serviceId = 'service_fev3xlh'; 
    const templateId = 'template_v3wbcwr'; 
    const publicKey = 'OHM7ywNweUQODFFED'; 

    emailjs.send(serviceId, templateId, {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message
    }, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setStatus('Message sent successfully!');
        setIsSubmitting(false);
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="h-8 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Get In Touch</h1>
        </div>
        <p className="text-xs sm:text-sm text-cyan-400 font-medium pl-4">Have a project idea or opportunities? Let's talk!</p>
      </div>

      {/* Main Grid: Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Quick Contact Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-2xl p-5 border border-white/10 bg-slate-900/60 space-y-4">
            <h3 className="text-base font-bold text-white mb-2">Contact Information</h3>
            
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0">
                <p className="text-slate-400 text-xs font-medium">Email</p>
                <a href="mailto:fringeks011@gmail.com" className="text-slate-200 hover:text-cyan-400 font-semibold truncate block transition-colors">
                  fringeks011@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Phone</p>
                <a href="tel:+919961857227" className="text-slate-200 hover:text-cyan-400 font-semibold transition-colors">
                  +91-9961857227
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Location</p>
                <span className="text-slate-200 font-semibold">Kerala, India</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/10 bg-cyan-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
            <h4 className="text-sm font-bold text-cyan-300">Open for Opportunities</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Open for full-time career roles and freelance Flutter mobile & full-stack development projects.
            </p>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-7 border border-white/10 bg-slate-900/60 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950/70 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950/70 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-950/70 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all h-32 sm:h-36 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-slate-950 hover:text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status && (
              <div className={`flex items-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-medium ${
                status.includes('successfully')
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : status.includes('Failed')
                  ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                  : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
              }`}>
                {status.includes('successfully') ? (
                  <FaCheckCircle className="shrink-0 text-emerald-400" />
                ) : status.includes('Failed') ? (
                  <FaExclamationTriangle className="shrink-0 text-rose-400" />
                ) : (
                  <FaSpinner className="animate-spin shrink-0 text-cyan-400" />
                )}
                <span>{status}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactForm;