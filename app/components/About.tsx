'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            About <span className="text-yoga-accent">Us</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yoga-accent mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1608404862898-ca7de462b6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
              alt="Yogacharya Kundan teaching"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3>Discover Our Sanctuary</h3>
            <p className="text-gray-700">
              Prāṇa Shakti Wellness & Meditation Center was founded with a vision to create a peaceful sanctuary 
              where people from all walks of life could connect with the ancient wisdom of yoga and experience 
              profound physical, mental, and spiritual transformation.
            </p>
            <p className="text-gray-700">
              Our center offers a range of classes suitable for practitioners of all ages and experience levels, 
              from beginners taking their first steps on the yogic path to advanced students deepening their practice.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-serif font-semibold text-yoga-dark mb-3">Meet Your Guide: Yogacharya Kundan</h4>
              <p className="text-gray-700">
                With over 15 years of experience in teaching yoga, Yogacharya Kundan brings a wealth of knowledge 
                and authentic training to every class. Trained in traditional Hatha, Ashtanga, and Kundalini yoga, 
                he combines ancient techniques with modern understanding to create a practice that is both 
                accessible and transformative.
              </p>
              <p className="text-gray-700 mt-3">
                His teaching philosophy centers on honoring each student's unique journey while guiding them toward 
                greater strength, flexibility, and inner peace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 