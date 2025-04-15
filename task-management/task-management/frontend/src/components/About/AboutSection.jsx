
const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
          At <span className="text-teal-600 font-semibold">Sai Global Gurukul (SGG)</span>, we believe every child is born with unique talents and limitless potential.
          Our mission is to unlock that potential and guide students toward a future filled with success, confidence, and fulfillment. 
          Whether yore a parent seeking the best for your child or a student aiming to excel, SGG offers 
          <span className="text-teal-700 font-semibold"> transformative programs </span>
          designed to empower you at every step of your journey.
          <span className="text-orange-600 font-semibold cursor-pointer hover:underline ml-2">
            Explore More →
          </span>
        </p>

        <button className="mt-8 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
          Register Now!
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
