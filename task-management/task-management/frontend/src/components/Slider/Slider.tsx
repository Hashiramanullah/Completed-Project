import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StudentSuccessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      src: "https://www.sgg.mm99.in/img/tes1.jpg",
      alt: "Students celebrating with certificates outside NEET college"
    },
    {
      src: "https://www.sgg.mm99.in/img/tes6.jpg",
      alt: "Students holding certificates and celebrating"
    },
    {
      src: "https://www.sgg.mm99.in/img/img2.png",
      alt: "Group of students with certificates outside college building"
    },
    {
      src: "https://www.sgg.mm99.in/img/tes17.jpg",
      alt: "Medical student in white coat holding certificate and flowers"
    },
    {
      src: "https://www.sgg.mm99.in/img/tes1.jpg",
      alt: "Students celebrating academic achievement"
    },
    {
      src: "https://www.sgg.mm99.in/img/tes1.jpg",
      alt: "Graduate holding certificate with classmates"
    }
  ];

  const totalSlides = Math.ceil(images.length / 3);
  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          
          {/* Image Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex space-x-4">
                  {images.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-8 mx-1 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Content Below Carousel */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Take the First Step Toward a Brighter Future!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Whether it's unlocking your child's potential, acing competitive exams, or building essential life skills,
          </p>
          
          <p className="text-lg md:text-xl mb-8">
            <span className="text-teal-500 font-semibold">Sai Global Gurukul</span> is here to guide you every step of the way.
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
              Learn More About Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}