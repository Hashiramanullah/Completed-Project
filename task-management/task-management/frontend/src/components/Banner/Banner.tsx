import React from 'react'

const Banner = () => {
  return (
    <div>
         <div className="relative flex-grow">
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://www.sgg.mm99.in/img/img1.png')",
                    filter: "brightness(40%)" 
                  }}
                ></div>
                
                {/* Banner content */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4 py-32">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-yellow-400">
                    Welcome to Sai Global Gurukul
                  </h1>
                  <p className="text-xl md:text-2xl italic text-center">
                    Where Potential Meets Possibility
                  </p>
                </div>
              </div>
        
    </div>
  )
}

export default Banner