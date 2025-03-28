'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'Regular Practitioner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'Prāṇa Shakti has completely transformed my life. The peaceful environment and Yogacharya Kundan\'s expert guidance have helped me find balance in both body and mind.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Meditation Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'After just three months of attending the meditation classes, my stress levels have decreased significantly. I\'ve learned techniques that I can practice anywhere, anytime.',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Corporate Professional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'As someone with a busy schedule, the flexibility of classes at Prāṇa Shakti has been a blessing. Kundan\'s approach to yoga is holistic and accessible for beginners like me.',
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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white">
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <motion.div 
                key={testimonials[currentTestimonial].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md"
              >
                <Image 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <motion.div
                key={testimonials[currentTestimonial].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg italic font-serif text-gray-700 mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <h4 className="text-xl font-semibold text-yoga-dark">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-yoga-accent">{testimonials[currentTestimonial].role}</p>
              </motion.div>
            </div>
          </div>

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