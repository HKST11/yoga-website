'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

const galleryImages = [
  {
    id: 1,
    src: '/images/Kundan_Prize.jpeg',
    alt: 'Yogacharya Kundan receiving prize',
    category: 'achievement',
  },
  {
    id: 2,
    src: '/images/Schedule.jpeg',
    alt: 'Yoga class schedule',
    category: 'classes',
  },
  {
    id: 3,
    src: '/images/Kundan_1_other.jpeg',
    alt: 'Yogacharya Kundan with one other person',
    category: 'achievement',
  },
  {
    id: 4,
    src: '/images/Yoga_Pose.jpeg',
    alt: 'Yoga pose demonstration',
    category: 'classes',
  },
  {
    id: 5,
    src: '/images/yogacharya-kundan.jpeg',
    alt: 'Yogacharya Kundan teaching',
    category: 'classes',
  },
  // {
  //   id: 6,
  //   src: 'https://images.unsplash.com/photo-1573590330099-d6c7355ec595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  //   alt: 'Yoga studio interior',
  //   category: 'studio',
  // },
];

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'classes', label: 'Classes' },
    // { value: 'meditation', label: 'Meditation' },
    // { value: 'studio', label: 'Studio' },
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section bg-yoga-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our <span className="text-yoga-accent">Gallery</span>
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
            className="max-w-3xl mx-auto text-gray-700 mb-8"
          >
            Take a glimpse into our peaceful sanctuary and the transformative yoga experiences we offer.
          </motion.p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-yoga-accent text-white'
                    : 'bg-white text-yoga-dark hover:bg-yoga-medium'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(image)}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-[1.03]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-yoga-accent text-3xl z-10"
              aria-label="Close lightbox"
            >
              <FiX />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 