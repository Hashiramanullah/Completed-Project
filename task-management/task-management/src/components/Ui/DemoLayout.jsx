import React from 'react';

const DemoLayout = () => {
  return (
    <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
      <div className="flex flex-wrap mx-[-15px] mb-10">
        <div className="md:w-9/12 lg:w-7/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <div className="counter-wrapper">
            <h3 className="xl:!text-[3.5rem] text-[calc(1.475rem_+_2.7vw)] mb-3 text-[#3f78e0] !leading-none !text-center counter">21</h3>
          </div>
          <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[2rem] mb-3 !text-center">
            Functional, impressive and rich demos to start with
          </h2>
        </div>
      </div>
      <div className="demos-wrapper">
        <div className="project mb-10">
          <div className="card !bg-[#f0f0f8]">
            <div className="card-body xl:!pl-14 px-[40px] py-0 overflow-hidden">
              <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] items-center">
                <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full">
                  <div className="flex flex-wrap mx-[-17.5px]">
                    <div className="w-6/12 flex-[0_0_auto] px-[17.5px] max-w-full">
                      <figure className="itooltip itooltip-grape mt-9" title='<h5 className="!mb-0">Click to see the demo</h5>'>
                        <a href="../../demo18.html" target="_blank">
                          <img className="shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-t-[0.4rem]" 
                               src="https://sandbox-tailwind-template.netlify.app/assets/img/demos/d18@2x.jpg" 
                            //    srcSet="../../assets/img/demos/d18@2x.jpg 2x" 
                               alt="image" />
                        </a>
                      </figure>
                    </div>
                    <div className="w-6/12 flex-[0_0_auto] px-[17.5px] max-w-full">
                      <figure className="itooltip itooltip-grape" title='<h5 className="!mb-0">Click to see the demo</h5>'>
                        <a href="../../demo18.html" target="_blank">
                          <img className="shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-br-[0.4rem] rounded-bl-[0.4rem]" 
                               src="https://sandbox-tailwind-template.netlify.app/assets/img/demos/d18-2@2x.jpg" 
                            //    srcSet="../../assets/img/demos/d18-2@2x.jpg 2x" 
                               alt="image" />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="xl:w-5/12 lg:w-5/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full xl:block lg:block">
                  <h2 className="post-title xl:text-[1.5rem] text-[calc(1.275rem_+_0.3vw)] mb-4 !leading-[1.35]">
                    Demo Layout XVIII
                  </h2>
                  <ul className="pl-0 list-none bullet-grape flex flex-wrap mx-[-15px] ml-0 mt-[-10px]">
                    <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                      <span><i className="uil uil-check before:content-['\e9dd'] absolute top-[-0.2rem] text-[1rem] text-[#605dba] left-0"></i></span>
                      <span>Network, Marketing</span>
                    </li>
                    <li className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full relative pl-5 mt-[10px]">
                      <span><i className="uil uil-check before:content-['\e9dd'] absolute top-[-0.2rem] text-[1rem] text-[#605dba] left-0"></i></span>
                      <span>Design, Layout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoLayout;
