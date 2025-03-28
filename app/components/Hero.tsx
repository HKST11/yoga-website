'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/poses/pose8.jpeg"
          alt="Yoga meditation background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 drop-shadow-lg">
            Prāṇa Shakti
            <span className="block text-2xl md:text-3xl font-normal mt-2">
              Wellness & Meditation Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-serif italic drop-shadow-lg">
            प्राण शक्ति वेलनेस और ध्यान केंद्र
          </p>
          <p className="text-lg mb-8 max-w-2xl drop-shadow-lg">
            Discover inner peace and physical harmony through the ancient practice of yoga with 
            Yogacharya Kundan at our tranquil sanctuary.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#classes">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Explore Classes
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-yoga-dark"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 