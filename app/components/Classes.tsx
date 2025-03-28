'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUser, FiVideo, FiMapPin, FiCalendar } from 'react-icons/fi';

interface YogaClass {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  isOnline: boolean;
  isOffline: boolean;
  isUpcoming: boolean;
  upcomingDate?: string;
}

const yogaClasses: YogaClass[] = [
  {
    id: 1,
    title: 'Hatha Yoga',
    description: 'A gentle introduction to the most basic yoga postures. Perfect for beginners and those looking to improve flexibility and balance.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'All Levels',
    duration: '60 min',
    isOnline: true,
    isOffline: true,
    isUpcoming: false,
  },
  {
    id: 2,
    title: 'Vinyasa Flow',
    description: 'A dynamic practice that connects movement with breath. Builds strength, flexibility and concentration through flowing sequences.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'Intermediate',
    duration: '60 min',
    isOnline: true,
    isOffline: true,
    isUpcoming: false,
  },
  {
    id: 3,
    title: 'Meditation',
    description: 'Learn various meditation techniques to calm the mind, reduce stress, and increase awareness. Suitable for everyone seeking inner peace.',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    level: 'All Levels',
    duration: '60 min',
    isOnline: true,
    isOffline: false,
    isUpcoming: false,
  },
  {
    id: 4,
    title: 'Chakra Meditation',
    description: 'Explore the seven energy centers of the body through guided meditation practices. Learn techniques to balance your chakras and enhance your overall wellbeing.',
    image: 'https://images.unsplash.com/photo-1603166868295-4ae2cba14063?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWtyYXxlbnwwfDB8MHx8fDI%3D',
    level: 'All Levels',
    duration: '60 min',
    isOnline: true,
    isOffline: false,
    isUpcoming: true,
    upcomingDate: 'Starts August 15, 2023',
  },
  {
    id: 5,
    title: "Yoga Teacher's Training",
    description: 'Comprehensive training program for aspiring yoga teachers. Learn proper alignment, sequencing, adjustment techniques, yoga philosophy, and teaching methodology.',
    image: 'https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW9nYSUyMFRlYWNoZXJ8ZW58MHwwfDB8fHwy',
    level: 'Intermediate/Advanced',
    duration: '200 hours (8 weeks)',
    isOnline: false,
    isOffline: true,
    isUpcoming: true,
    upcomingDate: 'Next batch: September 1, 2023',
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
  
  const getClassMode = (yogaClass: YogaClass): string => {
    if (yogaClass.isOnline && yogaClass.isOffline) {
      return 'Online & In-person';
    } else if (yogaClass.isOnline) {
      return 'Online Only';
    } else if (yogaClass.isOffline) {
      return 'In-person Only';
    }
    return '';
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {yogaClasses.map((yogaClass) => (
            <motion.div 
              key={yogaClass.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:scale-[1.02]"
            >
              <div className="relative">
                {yogaClass.isUpcoming && (
                  <div className="absolute top-0 right-0 bg-yoga-accent text-white px-3 py-1 text-sm font-medium">
                    Upcoming
                  </div>
                )}
                <div className="relative h-64">
                  <Image 
                    src={yogaClass.image}
                    alt={yogaClass.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl text-yoga-dark">{yogaClass.title}</h3>
                  {yogaClass.isUpcoming && (
                    <span className="bg-yoga-accent bg-opacity-10 text-yoga-accent text-xs font-medium px-2 py-1 rounded">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{yogaClass.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <FiUser className="mr-2 text-yoga-accent" />
                      <span>{yogaClass.level}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-2 text-yoga-accent" />
                      <span>{yogaClass.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <span className="font-medium mr-2">Available:</span>
                    <div className="flex items-center">
                      {yogaClass.isOffline && (
                        <span className="flex items-center mr-3">
                          <FiMapPin className="mr-1 text-yoga-dark" />
                          <span>In-person</span>
                        </span>
                      )}
                      {yogaClass.isOnline && (
                        <span className="flex items-center">
                          <FiVideo className="mr-1 text-yoga-dark" />
                          <span>Online</span>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {yogaClass.isUpcoming && yogaClass.upcomingDate && (
                    <div className="bg-yoga-light p-3 rounded-md mb-4 text-sm">
                      <div className="flex items-center text-yoga-dark">
                        <FiCalendar className="mr-2 text-yoga-accent" />
                        <span className="font-medium">{yogaClass.upcomingDate}</span>
                      </div>
                    </div>
                  )}
                  
                  <Link href="#schedule">
                    <button className="w-full btn btn-outline">View Schedule</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Classes; 