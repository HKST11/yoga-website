'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUser, FiInfo } from 'react-icons/fi';

const yogaClasses = [
  {
    id: 1,
    title: 'Hatha Yoga',
    description: 'A gentle introduction to the most basic yoga postures. Perfect for beginners and those looking to improve flexibility and balance.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'All Levels',
    duration: '60 min',
  },
  {
    id: 2,
    title: 'Vinyasa Flow',
    description: 'A dynamic practice that connects movement with breath. Builds strength, flexibility and concentration through flowing sequences.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'Intermediate',
    duration: '75 min',
  },
  {
    id: 3,
    title: 'Meditation',
    description: 'Learn various meditation techniques to calm the mind, reduce stress, and increase awareness. Suitable for everyone seeking inner peace.',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'All Levels',
    duration: '45 min',
  },
  {
    id: 4,
    title: 'Kundalini Yoga',
    description: 'A spiritual and energetic practice that incorporates movement, dynamic breathing, meditation, and chanting to build physical vitality and increase consciousness.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    level: 'Intermediate/Advanced',
    duration: '90 min',
  },
];

const Classes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="classes" className="section bg-yoga-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our <span className="text-yoga-accent">Classes</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yoga-accent mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-700"
          >
            Explore our diverse range of yoga classes designed for practitioners of all levels.
            Whether you're a beginner or experienced yogi, we have something special for you.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {yogaClasses.map((yogaClass) => (
            <motion.div 
              key={yogaClass.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64">
                <Image 
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl mb-3 text-yoga-dark">{yogaClass.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{yogaClass.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center">
                    <FiUser className="mr-2 text-yoga-accent" />
                    <span>{yogaClass.level}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-2 text-yoga-accent" />
                    <span>{yogaClass.duration}</span>
                  </div>
                </div>
                <Link href="#schedule">
                  <button className="w-full btn btn-outline">View Schedule</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Classes; 