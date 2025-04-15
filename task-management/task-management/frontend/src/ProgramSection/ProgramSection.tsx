// components/ProgramsSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: "The Career Compass Program",
    description: "Unleash Your Child's Genius!",
    points: [
      "Career Scan: A revolutionary 360° assessment across 27 dimensions to uncover hidden talents.",
      "Personalized Roadmap: Tailored academic and career plans to guide your child toward their dream future.",
      "Expert Mentorship: One-on-one counseling with industry experts to decode potential and chart the right path.",
    ],
    note: "Stop guessing, start knowing. Give your child the gift of clarity and confidence with the Career Compass Program.",
    img: "https://www.sgg.mm99.in/img/img1.png",
  },
  // Add 5 more objects like this
  {
    title: "Creative Arts Mastery",
    description: "Ignite Your Child's Creative Side!",
    points: [
      "Art & Design workshops for all levels.",
      "Theater and performance opportunities.",
      "Mentorship from creative industry professionals.",
    ],
    note: "Discover and nurture creativity like never before.",
    img: "https://www.sgg.mm99.in/img/tes17.jpg",
  },
  {
    title: "STEM Explorers Program",
    description: "Building the Next Generation of Innovators.",
    points: [
      "Hands-on robotics and coding labs.",
      "Math Olympics and Science fairs.",
      "Future Tech challenges and hackathons.",
    ],
    note: "Inspire the engineer or scientist in your child.",
    img: "https://www.sgg.mm99.in/img/img2.png",
  },
  {
    title: "Global Leadership Program",
    description: "Shape Confident, Ethical Leaders.",
    points: [
      "Debate, Model UN, and leadership retreats.",
      "Ethics, philosophy, and global awareness.",
      "International guest speakers and events.",
    ],
    note: "Preparing young minds to lead with purpose.",
    img: "https://www.sgg.mm99.in/img/tes6.jpg",
  },
  {
    title: "Mind & Wellness Track",
    description: "Empowering Students from Within.",
    points: [
      "Mindfulness and meditation sessions.",
      "Life skills and mental health workshops.",
      "Focus, self-control, and positivity training.",
    ],
    note: "Support the mental and emotional growth of your child.",
    img: "https://www.sgg.mm99.in/img/tes1.jpg",
  },
  {
    title: "Entrepreneurship Bootcamp",
    description: "Turning Ideas into Action.",
    points: [
      "Real-world business building for students.",
      "Financial literacy and startup simulations.",
      "Mentorship by successful entrepreneurs.",
    ],
    note: "Create future innovators who build solutions.",
    img: "https://www.sgg.mm99.in/img/tes6.jpg",
  }
];

export default function ProgramsSection() {
  return (
 <>
    <div className="bg-[#0f2e45] py-20 px-4 md:px-16">
      <h2 className="text-white text-4xl font-bold text-center mb-16">Discover Our Programs</h2>
      <div className="space-y-24">
        {programs.map((program, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-10`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={program.img}
                  alt={program.title}
                 
                  className="rounded-xl  shadow-lg object-cover w-[70%]"
                />
              </div>
              <div className="w-full md:w-1/2 text-white space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-orange-500">{program.title}</h3>
                <p className="text-lg font-medium">{program.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {program.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="text-cyan-400 text-sm font-medium">{program.note}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </>
  );
}
