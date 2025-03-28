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
    image: '/images/testimonials/nidhi.jpg',
    quote: `Hello Sir,
It's been around 4 months joining your class. I would like to tell you that I joined your classes on one of my friend's request, who had so much faith in your yoga skills. But I was not sure on how online yoga class will work.

Perhaps I joined classes, thinking to somehow complete a month. But your willingness to teach us correct yoga and your intention to help us in various problems, kept me motivated to continue classes. And now yoga is just like a daily routine for me, which helps me to start my day much refreshed.

It also helped me a lot in my back pain and sinus problems a lot.
You are having a Spiderman like flexibility, but still you teach us yoga very patiently and help us to do better each day.

Thank you so much 😊`,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Meditation Student',
    image: '/images/testimonials/priya.jpg',
    quote: `I came to Yogacharya Kundan's class with severe anxiety and sleep issues that had been affecting me for years. After just three months of attending the meditation classes, my stress levels have decreased significantly.

I've learned breathing techniques and mindfulness practices that I can use anywhere, anytime when I feel anxious. The morning yoga routine has improved my physical health, and I sleep much better now.

Kundan sir's patient guidance and personalized attention have made all the difference. I'm grateful for finding this peaceful sanctuary.`,
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Corporate Professional',
    image: '/images/testimonials/rahul.jpg',
    quote: `As someone with a busy corporate schedule, finding time for exercise was always challenging. The flexibility of classes at Prāṇa Shakti has been a blessing. I can attend early morning sessions before work or evening classes after.

Kundan sir's approach to yoga is holistic and accessible for beginners like me. He explains the purpose behind each asana and offers modifications when needed. After six months of regular practice, I've noticed improved posture, better focus at work, and decreased stress levels.

The community atmosphere is welcoming and non-judgmental, making it easy to stay committed to my practice. I highly recommend these classes to other busy professionals looking to improve their wellbeing.`,
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
    }, 15000); // Increased time to 15 seconds for longer testimonials

    return () => clearInterval(interval);
  }, []);

  // Function to format multi-line testimonials with proper line breaks
  const formatQuote = (quote: string) => {
    return quote.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < quote.split('\n').length - 1 && <br />}
      </span>
    ));
  };

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
          <div className="flex flex-col md:flex-row items-start">
            {/* Profile Image */}
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <motion.div 
                key={testimonials[currentTestimonial].id + "-image"}
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
            
            {/* Testimonial Text */}
            <div className="md:w-3/4 md:pl-8">
              <motion.div
                key={testimonials[currentTestimonial].id + "-content"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-lg font-serif text-gray-700 mb-6 max-h-[300px] overflow-y-auto pr-2 testimonial-scroll">
                  {formatQuote(testimonials[currentTestimonial].quote)}
                </div>
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