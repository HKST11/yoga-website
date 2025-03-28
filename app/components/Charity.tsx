'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiExternalLink, FiCalendar } from 'react-icons/fi';

interface CharityInitiative {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  websiteUrl?: string;
  nextVisit?: string;
  donationInfo?: string;
}

const charityInitiatives: CharityInitiative[] = [
  {
    id: 1,
    name: 'Peaceful Hearts Senior Home',
    description: 'A residential facility for the elderly where Yogacharya Kundan conducts gentle yoga and meditation sessions specially adapted for seniors, helping improve their mobility, reduce pain, and enhance mental wellbeing.',
    image: 'https://images.unsplash.com/photo-1565615833231-e8c91a38a012?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYWdlfGVufDB8fDB8fHwy',
    location: 'Delhi NCR',
    websiteUrl: 'https://www.peacefulhearts.org',
    nextVisit: 'Every Wednesday, 10:00 AM',
    donationInfo: 'They need yoga mats, meditation cushions, and financial support for their therapy programs.',
  },
  {
    id: 2,
    name: 'Sunshine Children\'s Rehabilitation Center',
    description: 'A center for children with special needs where Yogacharya Kundan volunteers to teach therapeutic yoga techniques that help with sensory integration, motor skills development, and emotional regulation.',
    image: 'https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JwaGFuYWdlfGVufDB8fDB8fHwy',
    location: 'Noida',
    websiteUrl: 'https://www.sunshinechildren.org',
    nextVisit: 'First Sunday of every month, 4:00 PM',
    donationInfo: 'They are in need of educational toys, children\'s books, and funds for their scholarship program.',
  },
  {
    id: 3,
    name: 'Veterans Wellness Association',
    description: 'An organization supporting military veterans where Yogacharya Kundan offers trauma-sensitive yoga and meditation sessions to help with PTSD, anxiety, and reintegration challenges.',
    image: 'https://images.unsplash.com/photo-1529787730-bdcabd22a644?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmV0ZXJhbnN8ZW58MHx8MHx8fDI%3D',
    location: 'Gurgaon',
    websiteUrl: 'https://www.veteranswellness.org',
    nextVisit: 'Second Saturday of every month, 9:00 AM',
    donationInfo: 'They welcome financial contributions for their mental health support programs and community activities.',
  },
];

const Charity = () => {
  const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedInitiative === id) {
      setExpandedInitiative(null);
    } else {
      setExpandedInitiative(id);
    }
  };

  return (
    <section id="charity" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our <span className="text-yoga-accent">Community Initiatives</span>
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
            At Prāṇa Shakti, we believe in giving back to the community. Yogacharya Kundan regularly visits 
            these organizations to share the gifts of yoga and meditation with those who may benefit most.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {charityInitiatives.map((initiative) => (
            <motion.div 
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-yoga-light bg-opacity-40 rounded-lg overflow-hidden shadow-md flex flex-col h-full"
            >
              <div className="relative h-64">
                <Image 
                  src={initiative.image}
                  alt={initiative.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-medium">{initiative.name}</h3>
                    <p className="text-sm mt-1">{initiative.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className={`text-gray-700 mb-4 ${expandedInitiative === initiative.id ? '' : 'line-clamp-3'}`}>
                  {initiative.description}
                </p>
                
                <button 
                  onClick={() => toggleExpand(initiative.id)}
                  className="text-yoga-accent text-sm font-medium mb-4 hover:underline self-start"
                >
                  {expandedInitiative === initiative.id ? 'Show less' : 'Read more'}
                </button>
                
                {expandedInitiative === initiative.id && (
                  <div className="mb-4 space-y-3">
                    {initiative.nextVisit && (
                      <div className="flex items-start text-sm">
                        <FiCalendar className="text-yoga-accent mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Next Visit:</span> {initiative.nextVisit}
                        </div>
                      </div>
                    )}
                    
                    {initiative.donationInfo && (
                      <div className="flex items-start text-sm">
                        <FiHeart className="text-yoga-accent mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">How You Can Help:</span> {initiative.donationInfo}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-auto pt-4">
                  {initiative.websiteUrl && (
                    <a 
                      href={initiative.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yoga-dark hover:text-yoga-accent font-medium text-sm transition-colors"
                    >
                      Visit Website <FiExternalLink className="ml-1" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-gray-100 rounded-lg p-8 shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-medium text-yoga-dark mb-4 text-center">Support Our Community Work</h3>
          <p className="text-gray-700 mb-6 text-center">
            If you would like to contribute to any of these initiatives or join Yogacharya Kundan during 
            his volunteer sessions, please reach out using our contact form or during class. 
            Your support makes a meaningful difference in the lives of many.
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
              <button className="btn btn-primary">Get Involved</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Charity; 