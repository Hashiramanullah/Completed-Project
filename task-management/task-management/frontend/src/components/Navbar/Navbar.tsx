import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
           <div className="bg-teal-600 text-white sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <div className="mr-4">
              <img 
                src="/api/placeholder/120/60" 
                alt="Sai Global Gurukul Logo" 
                className="h-12"
              />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-yellow-200 font-medium">
                About SGG
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Story</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mission & Vision</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
              </div>
            </div>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Scan Report</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Zen Mind Activation</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Careers Guidance</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Life Coach</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Online Coaching</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Parents Desk</a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium">Technical Courses</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-teal-700 px-4 py-2">
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <button 
                  className="flex items-center text-white hover:text-yellow-200 font-medium w-full justify-between"
                  onClick={() => {}}
                >
                  About SGG
                  <ChevronDown size={16} />
                </button>
              </div>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Scan Report</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Zen Mind Activation</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Careers Guidance</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Life Coach</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Online Coaching</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Parents Desk</a>
              <a href="#" className="text-white hover:text-yellow-200 font-medium">Technical Courses</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar