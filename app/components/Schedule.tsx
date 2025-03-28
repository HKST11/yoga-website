'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiVideo, FiMapPin } from 'react-icons/fi';

interface ScheduleSession {
  time: string;
  class: string;
  teacher: string;
  isOnline: boolean;
  isOffline: boolean;
  isUpcoming?: boolean;
}

interface ScheduleData {
  [key: string]: ScheduleSession[];
}

const scheduleData: ScheduleData = {
  Monday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '6:00 PM - 7:00 PM', class: 'Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false },
  ],
  Tuesday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:00 AM - 10:30 AM', class: 'Chakra Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false, isUpcoming: true },
    { time: '6:00 PM - 7:15 PM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
  ],
  Wednesday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '6:00 PM - 7:00 PM', class: 'Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false },
  ],
  Thursday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:00 AM - 10:30 AM', class: 'Chakra Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false, isUpcoming: true },
    { time: '6:00 PM - 7:15 PM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
  ],
  Friday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '6:00 PM - 7:30 PM', class: 'Chakra Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false, isUpcoming: true },
  ],
  Saturday: [
    { time: '8:00 AM - 9:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '9:30 AM - 10:45 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: true },
    { time: '5:00 PM - 6:45 PM', class: 'Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false },
    { time: '2:00 PM - 5:00 PM', class: "Yoga Teacher's Training", teacher: 'Yogacharya Kundan', isOnline: false, isOffline: true, isUpcoming: true },
  ],
  Sunday: [
    { time: '8:00 AM - 9:30 AM', class: 'Chakra Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false, isUpcoming: true },
    { time: '10:00 AM - 11:00 AM', class: 'Meditation', teacher: 'Yogacharya Kundan', isOnline: true, isOffline: false },
    { time: '2:00 PM - 5:00 PM', class: "Yoga Teacher's Training", teacher: 'Yogacharya Kundan', isOnline: false, isOffline: true, isUpcoming: true },
  ],
};

const days = Object.keys(scheduleData);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  const getModeBadge = (session: ScheduleSession) => {
    if (session.isOnline && session.isOffline) {
      return (
        <div className="flex items-center space-x-1">
          <FiMapPin className="text-green-600" size={14} />
          <span className="mx-1">/</span>
          <FiVideo className="text-blue-600" size={14} />
        </div>
      );
    } else if (session.isOnline) {
      return <FiVideo className="text-blue-600" size={14} />;
    } else if (session.isOffline) {
      return <FiMapPin className="text-green-600" size={14} />;
    }
    return null;
  };

  return (
    <section id="schedule" className="section bg-yoga-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Weekly <span className="text-yoga-accent">Schedule</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yoga-accent mx-auto mb-6"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-8 flex items-center justify-center text-sm gap-6"
          >
            <div className="flex items-center">
              <FiVideo className="text-blue-600 mr-2" />
              <span>Online</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-green-600 mr-2" />
              <span>In-person</span>
            </div>
            <div className="flex items-center">
              <span className="bg-yoga-accent w-2 h-2 rounded-full mr-2"></span>
              <span>Upcoming</span>
            </div>
          </motion.div>
        </div>

        {/* Days Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 font-medium transition-colors ${
                activeDay === day
                  ? 'bg-yoga-accent text-white'
                  : 'text-yoga-dark hover:bg-yoga-medium hover:bg-opacity-20'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <motion.div 
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-yoga-dark text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Class</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Teacher</th>
                  <th className="px-6 py-4 text-left text-sm font-medium w-16">Mode</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[activeDay].map((session: ScheduleSession, index: number) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 ${session.isUpcoming ? 'bg-yoga-light bg-opacity-30' : 'hover:bg-gray-50'}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yoga-dark">
                      {session.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 flex items-center">
                      <span className="mr-2">{session.class}</span>
                      {session.isUpcoming && (
                        <span className="inline-flex items-center text-yoga-accent text-xs">
                          <span className="h-2 w-2 bg-yoga-accent rounded-full mr-1"></span>
                          Upcoming
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {session.teacher}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {getModeBadge(session)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-6">
            All classes are suitable for all levels unless specified. New students are always welcome!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary">Book a Class</button>
            <button className="btn btn-outline">Download Schedule</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 