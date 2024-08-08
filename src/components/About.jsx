import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'Shamshad Husain', role: 'Leader', image: 'images/shamshad.png' },
  { name: 'Abhishek Tiwari', role: 'Developer', image: 'images/abhishek.png' },
  { name: 'Astha Sachan', role: 'Designer', image: 'images/userImage.png' },
  { name: 'Harsh Shukla', role: 'Tester', image: 'images/harsh.png' }
];

const About = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      '.team-member',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team-member',
          start: 'top 80%', // Animation starts when the top of the element is 80% from the top of the viewport
          end: 'bottom top', // Animation ends when the bottom of the element reaches the top of the viewport
          toggleActions: 'play none none reverse', // Play animation when entering view, reverse when leaving view
          markers: false, // Set to true to see the start/end markers
        }
      }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet The Team</h2>
          <p className="text-lg text-gray-600">
            We are the Logic Legion, a team of dedicated professionals committed to delivering exceptional solutions.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member bg-white shadow-lg rounded-lg overflow-hidden w-72 text-center"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
