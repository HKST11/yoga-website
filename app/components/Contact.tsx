'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Contact <span className="text-yoga-accent">Us</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yoga-accent mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-serif text-yoga-dark mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions about our classes, schedule, or pricing? We're here to help you 
              on your yoga journey. Reach out to us through any of the following channels or 
              fill out the form.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yoga-light p-3 rounded-full mr-4">
                  <FiMapPin className="text-yoga-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-yoga-dark">Location</h4>
                  <p className="text-gray-600">Raipur, Chhattisgarh, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yoga-light p-3 rounded-full mr-4">
                  <FiMail className="text-yoga-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-yoga-dark">Email</h4>
                  <p className="text-gray-600">yogacharyakundan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yoga-light p-3 rounded-full mr-4">
                  <FiPhone className="text-yoga-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-yoga-dark">Phone</h4>
                  <p className="text-gray-600">+91 79031 81568</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-yoga-light p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif text-yoga-dark mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your message! We will get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-yoga-dark mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yoga-accent"
                    placeholder="Rahul Verma"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-yoga-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yoga-accent"
                    placeholder="rahul@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-yoga-dark mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yoga-accent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-yoga-dark mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yoga-accent"
                    placeholder="I'd like to inquire about..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex justify-center items-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 