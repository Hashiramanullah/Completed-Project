import React from "react";

const OurAchievements = () => {
  return (
    <section className="wrapper bg-[#ffffff]">
      {/* Hero Section */}
      <div className="container-card pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-20 relative z-0 before:absolute before:inset-0 before:bg-[rgba(255,255,255,.5)]"
          style={{
            backgroundImage: `url('../../assets/img/photos/bg22.png')`,
            backgroundSize: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-body py-[4.5rem] px-0">
            <div className="container">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
                {/* Left Column */}
                <div className="xl:w-4/12 lg:w-4/12 w-full px-[15px] xl:px-[35px] lg:px-[20px] text-center lg:text-left mt-[50px] xl:mt-0 lg:mt-0">
                  <h3 className="xl:text-[1.8rem] text-[calc(1.305rem_+_0.66vw)] font-bold leading-[1.3] tracking-normal mb-3 xl:pr-20">
                    We are proud of our works
                  </h3>
                  <p className="text-[1.05rem] leading-[1.6] font-medium mb-0 xl:pr-10">
                    We bring solutions to make life easier for our customers.
                  </p>
                </div>

                {/* Right Column */}
                <div className="xl:w-8/12 lg:w-8/12 w-full px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:mt-2 lg:mt-2">
                  <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] text-center">
                    {[
                      { icon: "target.svg", value: "1000+", label: "Completed Projects" },
                      { icon: "bar-chart.svg", value: "4x", label: "Revenue Growth" },
                      { icon: "employees.svg", value: "99.7%", label: "Customer Satisfaction" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full px-[15px] mt-[30px]"
                      >
                        <img
                          src={`../../assets/img/icons/solid/${item.icon}`}
                          className="w-[2.2rem] h-[2.2rem] text-grape-fuchsia mb-3 mx-auto"
                          alt={item.label}
                        />
                        <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-normal leading-none mb-2">
                          {item.value}
                        </h3>
                        <p className="mb-0">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-[-8rem]">
        <div className="flex flex-wrap -mx-[15px]">
          {[
            {
              quote:
                "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta.”",
              name: "Coriss Ambady",
              role: "Financial Analyst",
            },
            {
              quote:
                "“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus.”",
              name: "Cory Zamora",
              role: "Marketing Specialist",
            },
            {
              quote:
                "“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum.”",
              name: "Nikolas Brooten",
              role: "Sales Manager",
            },
            {
              quote:
                "“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum.”",
              name: "Coriss Ambady",
              role: "Financial Analyst",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full px-[15px] mt-[30px]"
            >
              <div className="card shadow-lg border-[#c5d7f6]">
                <div className="card-body p-[40px]">
                  <blockquote className="text-[.85rem] leading-[1.7] font-medium mb-4">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="info">
                      <h5 className="mb-1 text-[.9rem]">{testimonial.name}</h5>
                      <p className="mb-0 text-[0.8rem]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
