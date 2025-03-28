'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Nidhi Kumari',
    role: 'Regular Practitioner',
    image: '/images/testimonials/testimonial1.jpeg'
  },
  {
    id: 2,
    name: 'Shaswati Bhattacharjee',
    role: 'Meditation Student',
    image: '/images/testimonials/testimonial2.jpeg'
  },
  {
    id: 3,
    name: 'Shaswati Bhattacharjee',
    role: 'Corporate Professional',
    image: '/images/testimonials/testimonial3.jpeg'
  },
  {
    id: 4,
    name: 'Shrishti Verma',
    role: 'Corporate Professional',
    image: '/images/testimonials/testimonial4.jpeg'
  },
  {
    id: 5,
    name: 'Veena Kumari',
    role: 'Corporate Professional',
    image: '/images/testimonials/testimonial5.jpeg'
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            What Our <span className="text-yoga-accent">Students</span> Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yoga-accent mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="relative bg-yoga-light rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          {/* Testimonial Image */}
          <motion.div
            key={testimonials[currentTestimonial].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={testimonials[currentTestimonial].image}
                alt={`Testimonial from ${testimonials[currentTestimonial].name}`}
                width={800}
                height={600}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-yoga-dark hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-yoga-accent' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-yoga-dark hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 