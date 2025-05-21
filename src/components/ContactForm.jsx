import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
 
  const [status, setStatus] = useState('');

  
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

   
    const serviceId = 'service_cqfzl9s'; 
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
        
        setFormData({ fullName: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div>
      <h1 className="text-white px-4 sm:px-6 py-4 text-2xl sm:text-3xl font-extrabold">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:gap-4 w-full px-3 sm:px-5 py-4 sm:py-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="p-2 sm:p-3 text-sm sm:text-base bg-[#2d2d2d] text-[#ccc] border-none rounded-md outline-none placeholder-[#888]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="p-2 sm:p-3 text-sm sm:text-base bg-[#2d2d2d] text-[#ccc] border-none rounded-md outline-none placeholder-[#888]"
            required
          />
        </div>
        <div className="mb-4 sm:mb-5 w-full px-3 sm:px-5">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-2 sm:p-3 text-sm sm:text-base bg-[#2d2d2d] text-[#ccc] border-none rounded-md w-full h-32 sm:h-40 resize-none outline-none placeholder-[#888]"
            required
          ></textarea>
        </div>
        <div className="flex justify-center w-full px-3 sm:px-5">
          <button
            type="submit"
            className="p-2 sm:p-3 bg-[#00aaff] text-white border-none rounded-md w-full sm:w-[50rem] text-sm sm:text-base"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && (
        <div className="text-center mt-4 text-sm sm:text-base text-white">
          {status}
        </div>
      )}
    </div>
  );
}

export default ContactForm;