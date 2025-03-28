'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ScheduleSession {
  time: string;
  class: string;
  teacher: string;
}

interface ScheduleData {
  [key: string]: ScheduleSession[];
}

const scheduleData: ScheduleData = {
  Monday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
    { time: '6:00 PM - 7:00 PM', class: 'Meditation', teacher: 'Yogacharya Kundan' },
  ],
  Tuesday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:00 AM - 10:30 AM', class: 'Kundalini Yoga', teacher: 'Yogacharya Kundan' },
    { time: '6:00 PM - 7:15 PM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
  ],
  Wednesday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
    { time: '6:00 PM - 7:00 PM', class: 'Meditation', teacher: 'Yogacharya Kundan' },
  ],
  Thursday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:00 AM - 10:30 AM', class: 'Kundalini Yoga', teacher: 'Yogacharya Kundan' },
    { time: '6:00 PM - 7:15 PM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
  ],
  Friday: [
    { time: '7:00 AM - 8:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:00 AM - 10:15 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
    { time: '6:00 PM - 7:30 PM', class: 'Kundalini Yoga', teacher: 'Yogacharya Kundan' },
  ],
  Saturday: [
    { time: '8:00 AM - 9:00 AM', class: 'Hatha Yoga', teacher: 'Yogacharya Kundan' },
    { time: '9:30 AM - 10:45 AM', class: 'Vinyasa Flow', teacher: 'Yogacharya Kundan' },
    { time: '5:00 PM - 6:45 PM', class: 'Meditation', teacher: 'Yogacharya Kundan' },
  ],
  Sunday: [
    { time: '8:00 AM - 9:30 AM', class: 'Kundalini Yoga', teacher: 'Yogacharya Kundan' },
    { time: '10:00 AM - 11:00 AM', class: 'Meditation', teacher: 'Yogacharya Kundan' },
  ],
};

const days = Object.keys(scheduleData);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

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
        </div>

        {/* Days Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeDay === day
                  ? 'bg-yoga-accent text-white'
                  : 'bg-white text-yoga-dark hover:bg-yoga-medium'
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yoga-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Teacher
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scheduleData[activeDay].map((session: ScheduleSession, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-yoga-light bg-opacity-30' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yoga-dark">
                      {session.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {session.class}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {session.teacher}
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
          <button className="btn btn-primary">Book a Class</button>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 