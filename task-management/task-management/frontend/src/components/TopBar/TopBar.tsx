import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const TopBar = () => {
  return (
    <div>
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
<div className="font-bold text-xl">Welcome to Sai Global Gurukul</div>
<div className="flex items-center space-x-2">
  <button className="bg-white text-gray-800 px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-100">
    Contact Us
  </button>
  <a href="#" className="text-white hover:text-gray-300">
    <Facebook size={20} />
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <Twitter size={20} />
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <Instagram size={20} />
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <Linkedin size={20} />
  </a>
</div>
</div>
    </div>
  )
}

export default TopBar