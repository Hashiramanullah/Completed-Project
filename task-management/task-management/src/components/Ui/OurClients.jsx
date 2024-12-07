const OurClients = () => {
    return (
      <div className="main py-10 px-4 md:px-10 lg:px-30 flex flex-col lg:flex-row justify-evenly gap-6">
        {/* Left Section */}
        <div className="child1 lg:w-[40%] flex flex-col justify-center">
          <h1 className=" lg:w-3/5 text-4xl sm:text-2xl font-semibold">
            Trusted by over 300+ clients
          </h1>
          <p className="w-full lg:w-2/4 text-base sm:text-sm text-gray-400 pt-5">
            We Bring Solutions to make life easier for our customers.
          </p>
        </div>
  
        {/* Right Section */}
        <div className="child2  flex flex-wrap justify-between lg:w-[60%] gap-4">
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z1.png"
            alt="Logo 1"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z2.png"
            alt="Logo 2"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z3.png"
            alt="Logo 3"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z4.png"
            alt="Logo 4"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z5.png"
            alt="Logo 5"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z6.png"
            alt="Logo 6"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z7.png"
            alt="Logo 7"
          />
          <img
            className="w-20 basis-1/2 sm:basis-1/2 lg:basis-1/4"
            src="https://sandbox-tailwind-template.netlify.app/assets/img/brands/z8.png"
            alt="Logo 8"
          />
        </div>
      </div>
    );
  };
  
  export default OurClients;
  