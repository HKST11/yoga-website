import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-yoga-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">
              Prāṇa<span className="text-yoga-accent">Shakti</span>
            </h2>
            <p className="font-serif italic">प्राण शक्ति वेलनेस और ध्यान केंद्र</p>
            <p className="text-sm max-w-md mt-2">
              A sanctuary of peace and wellness, where ancient yogic practices meet modern wellbeing techniques
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-yoga-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#classes" className="hover:text-yoga-accent transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-yoga-accent transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-yoga-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-yoga-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>123 Yoga Street, City, State - 110001</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                <span>+91 79031 81568</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <span>yogacharyakundan@gmail.com</span>
              </li>
              {/* Social Icons */}
              <li className="flex items-center space-x-4 pt-2">
                <Link href="https://www.instagram.com/yogacharya_kundan?igsh=dmxmMXQzNTExbmJn" className="hover:text-yoga-accent transition-colors">
                  <FiInstagram size={20} />
                </Link>
                <Link href="https://www.facebook.com/share/19mCug9jkE/" className="hover:text-yoga-accent transition-colors">
                  <FiFacebook size={20} />
                </Link>
                <Link href="https://www.youtube.com/@yogacharyakundan745" className="hover:text-yoga-accent transition-colors">
                  <FiYoutube size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Prāṇa Shakti Wellness & Meditation Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 