'use client';

import React from 'react';

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-16 relative overflow-hidden w-[100%] mx-auto">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-[#006d77]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Sai Global Gurukul?</h2>
        <ul className="space-y-4 text-sm md:text-base">
          <li>
            <span className="font-semibold text-[#028090]">• Scientifically Designed Programs:</span>{' '}
            Blending ancient wisdom with modern technology.
          </li>
          <li>
            <span className="font-semibold text-[#028090]">• Expert Guidance:</span>{' '}
            Mentors from top institutions like Harvard, ISB, and IIT.
          </li>
          <li>
            <span className="font-semibold text-[#028090]">• Proven Results:</span>{' '}
            Thousands of students have achieved academic and career success with SGG.
          </li>
          <li>
            <span className="font-semibold text-[#028090]">• Holistic Approach:</span>{' '}
            Focus on academics, skills, and personal development.
          </li>
        </ul>
      </div>
  
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.sgg.mm99.in/img/img7.jpg"
          alt="Student learning"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  </section>
  
  );
}
