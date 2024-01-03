import React from "react";
import {
  BsLightningFill,
  BsShieldFillCheck,
  BsStopwatchFill,
} from "react-icons/bs";
import { FaStar, FaUtensils } from "react-icons/fa6";

const About = () => {
  return (
    <section>
      <div className="container py-8 md:py-12 overflow-hidden">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-5 self-center">
            <div className="mb-10 relative z-10 mt-9 md:mr-40 lg:mr-10">
              <img src="./about-1.jpg" className="w-full rounded-2xl" alt="" />
              <div className="absolute top-0 left-3 -translate-x-1/2 -translate-y-1/2">
                <svg className="fill-yellow-500" width="77px" height="77px">
                  <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-xl p-4 absolute bottom-5 left-8 dark:bg-dark">
                <div className="relative flex gap-x-5">
                  <div className="">
                    <h5 className="mb-1 text-lg dark:text-gray-100">Client</h5>
                    <div className="flex">
                      <img
                        src="./avatar-01.jpg"
                        className="rounded-full w-10 h-10 object-cover object-center -ml-3 border-2 border-white first:ml-0 dark:border-dark"
                        alt=""
                      />
                      <img
                        src="./avatar-02.jpg"
                        className="rounded-full w-10 h-10 object-cover object-center -ml-3 border-2 border-white dark:border-dark"
                        alt=""
                      />
                      <img
                        src="./avatar-03.jpg"
                        className="rounded-full w-10 h-10 object-cover object-center -ml-3 border-2 border-white dark:border-dark"
                        alt=""
                      />
                      <img
                        src="./avatar-04.jpg"
                        className="rounded-full w-10 h-10 object-cover object-center -ml-3 border-2 border-white dark:border-dark"
                        alt=""
                      />
                      <span className="w-10 h-10 rounded-full border-2 border-white -ml-3 bg-blue-500 text-white flex justify-center items-center dark:border-dark">
                        1K+
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="mb-3 text-lg dark:text-gray-100">Rating</h5>
                    <p className="flex gap-x-1 items-center font-bold dark:text-gray-100">
                      4.5 <FaStar className="text-yellow-500" />
                    </p>
                  </div>
                  <div className="absolute -top-3 -left-3 -translate-x-1/2 -translate-y-1/2">
                    <img src="./about-01.svg" className="w-10 h-10" alt="" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -z-10 md:-right-40 lg:-right-10">
                <svg
                  height="400"
                  className="fill-blue-500 opacity-20 w-full h-full md:h-[400px] md:w-auto"
                  viewBox="0 0 340 340"
                >
                  <circle cx="194.2" cy="2.2" r="2.2"></circle>
                  <circle cx="2.2" cy="2.2" r="2.2"></circle>
                  <circle cx="218.2" cy="2.2" r="2.2"></circle>
                  <circle cx="26.2" cy="2.2" r="2.2"></circle>
                  <circle cx="242.2" cy="2.2" r="2.2"></circle>
                  <circle cx="50.2" cy="2.2" r="2.2"></circle>
                  <circle cx="266.2" cy="2.2" r="2.2"></circle>
                  <circle cx="74.2" cy="2.2" r="2.2"></circle>
                  <circle cx="290.2" cy="2.2" r="2.2"></circle>
                  <circle cx="98.2" cy="2.2" r="2.2"></circle>
                  <circle cx="314.2" cy="2.2" r="2.2"></circle>
                  <circle cx="122.2" cy="2.2" r="2.2"></circle>
                  <circle cx="338.2" cy="2.2" r="2.2"></circle>
                  <circle cx="146.2" cy="2.2" r="2.2"></circle>
                  <circle cx="170.2" cy="2.2" r="2.2"></circle>
                  <circle cx="194.2" cy="26.2" r="2.2"></circle>
                  <circle cx="2.2" cy="26.2" r="2.2"></circle>
                  <circle cx="218.2" cy="26.2" r="2.2"></circle>
                  <circle cx="26.2" cy="26.2" r="2.2"></circle>
                  <circle cx="242.2" cy="26.2" r="2.2"></circle>
                  <circle cx="50.2" cy="26.2" r="2.2"></circle>
                  <circle cx="266.2" cy="26.2" r="2.2"></circle>
                  <circle cx="74.2" cy="26.2" r="2.2"></circle>
                  <circle cx="290.2" cy="26.2" r="2.2"></circle>
                  <circle cx="98.2" cy="26.2" r="2.2"></circle>
                  <circle cx="314.2" cy="26.2" r="2.2"></circle>
                  <circle cx="122.2" cy="26.2" r="2.2"></circle>
                  <circle cx="338.2" cy="26.2" r="2.2"></circle>
                  <circle cx="146.2" cy="26.2" r="2.2"></circle>
                  <circle cx="170.2" cy="26.2" r="2.2"></circle>
                  <circle cx="194.2" cy="50.2" r="2.2"></circle>
                  <circle cx="2.2" cy="50.2" r="2.2"></circle>
                  <circle cx="218.2" cy="50.2" r="2.2"></circle>
                  <circle cx="26.2" cy="50.2" r="2.2"></circle>
                  <circle cx="242.2" cy="50.2" r="2.2"></circle>
                  <circle cx="50.2" cy="50.2" r="2.2"></circle>
                  <circle cx="266.2" cy="50.2" r="2.2"></circle>
                  <circle cx="74.2" cy="50.2" r="2.2"></circle>
                  <circle cx="290.2" cy="50.2" r="2.2"></circle>
                  <circle cx="98.2" cy="50.2" r="2.2"></circle>
                  <circle cx="314.2" cy="50.2" r="2.2"></circle>
                  <circle cx="122.2" cy="50.2" r="2.2"></circle>
                  <circle cx="338.2" cy="50.2" r="2.2"></circle>
                  <circle cx="146.2" cy="50.2" r="2.2"></circle>
                  <circle cx="170.2" cy="50.2" r="2.2"></circle>
                  <circle cx="194.2" cy="74.2" r="2.2"></circle>
                  <circle cx="2.2" cy="74.2" r="2.2"></circle>
                  <circle cx="218.2" cy="74.2" r="2.2"></circle>
                  <circle cx="26.2" cy="74.2" r="2.2"></circle>
                  <circle cx="242.2" cy="74.2" r="2.2"></circle>
                  <circle cx="50.2" cy="74.2" r="2.2"></circle>
                  <circle cx="266.2" cy="74.2" r="2.2"></circle>
                  <circle cx="74.2" cy="74.2" r="2.2"></circle>
                  <circle cx="290.2" cy="74.2" r="2.2"></circle>
                  <circle cx="98.2" cy="74.2" r="2.2"></circle>
                  <circle cx="314.2" cy="74.2" r="2.2"></circle>
                  <circle cx="122.2" cy="74.2" r="2.2"></circle>
                  <circle cx="338.2" cy="74.2" r="2.2"></circle>
                  <circle cx="146.2" cy="74.2" r="2.2"></circle>
                  <circle cx="170.2" cy="74.2" r="2.2"></circle>
                  <circle cx="194.2" cy="98.2" r="2.2"></circle>
                  <circle cx="2.2" cy="98.2" r="2.2"></circle>
                  <circle cx="218.2" cy="98.2" r="2.2"></circle>
                  <circle cx="26.2" cy="98.2" r="2.2"></circle>
                  <circle cx="242.2" cy="98.2" r="2.2"></circle>
                  <circle cx="50.2" cy="98.2" r="2.2"></circle>
                  <circle cx="266.2" cy="98.2" r="2.2"></circle>
                  <circle cx="74.2" cy="98.2" r="2.2"></circle>
                  <circle cx="290.2" cy="98.2" r="2.2"></circle>
                  <circle cx="98.2" cy="98.2" r="2.2"></circle>
                  <circle cx="314.2" cy="98.2" r="2.2"></circle>
                  <circle cx="122.2" cy="98.2" r="2.2"></circle>
                  <circle cx="338.2" cy="98.2" r="2.2"></circle>
                  <circle cx="146.2" cy="98.2" r="2.2"></circle>
                  <circle cx="170.2" cy="98.2" r="2.2"></circle>
                  <circle cx="194.2" cy="122.2" r="2.2"></circle>
                  <circle cx="2.2" cy="122.2" r="2.2"></circle>
                  <circle cx="218.2" cy="122.2" r="2.2"></circle>
                  <circle cx="26.2" cy="122.2" r="2.2"></circle>
                  <circle cx="242.2" cy="122.2" r="2.2"></circle>
                  <circle cx="50.2" cy="122.2" r="2.2"></circle>
                  <circle cx="266.2" cy="122.2" r="2.2"></circle>
                  <circle cx="74.2" cy="122.2" r="2.2"></circle>
                  <circle cx="290.2" cy="122.2" r="2.2"></circle>
                  <circle cx="98.2" cy="122.2" r="2.2"></circle>
                  <circle cx="314.2" cy="122.2" r="2.2"></circle>
                  <circle cx="122.2" cy="122.2" r="2.2"></circle>
                  <circle cx="338.2" cy="122.2" r="2.2"></circle>
                  <circle cx="146.2" cy="122.2" r="2.2"></circle>
                  <circle cx="170.2" cy="122.2" r="2.2"></circle>
                  <circle cx="194.2" cy="146.2" r="2.2"></circle>
                  <circle cx="2.2" cy="146.2" r="2.2"></circle>
                  <circle cx="218.2" cy="146.2" r="2.2"></circle>
                  <circle cx="26.2" cy="146.2" r="2.2"></circle>
                  <circle cx="242.2" cy="146.2" r="2.2"></circle>
                  <circle cx="50.2" cy="146.2" r="2.2"></circle>
                  <circle cx="266.2" cy="146.2" r="2.2"></circle>
                  <circle cx="74.2" cy="146.2" r="2.2"></circle>
                  <circle cx="290.2" cy="146.2" r="2.2"></circle>
                  <circle cx="98.2" cy="146.2" r="2.2"></circle>
                  <circle cx="314.2" cy="146.2" r="2.2"></circle>
                  <circle cx="122.2" cy="146.2" r="2.2"></circle>
                  <circle cx="338.2" cy="146.2" r="2.2"></circle>
                  <circle cx="146.2" cy="146.2" r="2.2"></circle>
                  <circle cx="170.2" cy="146.2" r="2.2"></circle>
                  <circle cx="194.2" cy="170.2" r="2.2"></circle>
                  <circle cx="2.2" cy="170.2" r="2.2"></circle>
                  <circle cx="218.2" cy="170.2" r="2.2"></circle>
                  <circle cx="26.2" cy="170.2" r="2.2"></circle>
                  <circle cx="242.2" cy="170.2" r="2.2"></circle>
                  <circle cx="50.2" cy="170.2" r="2.2"></circle>
                  <circle cx="266.2" cy="170.2" r="2.2"></circle>
                  <circle cx="74.2" cy="170.2" r="2.2"></circle>
                  <circle cx="290.2" cy="170.2" r="2.2"></circle>
                  <circle cx="98.2" cy="170.2" r="2.2"></circle>
                  <circle cx="314.2" cy="170.2" r="2.2"></circle>
                  <circle cx="122.2" cy="170.2" r="2.2"></circle>
                  <circle cx="338.2" cy="170.2" r="2.2"></circle>
                  <circle cx="146.2" cy="170.2" r="2.2"></circle>
                  <circle cx="170.2" cy="170.2" r="2.2"></circle>
                  <circle cx="194.2" cy="194.2" r="2.2"></circle>
                  <circle cx="2.2" cy="194.2" r="2.2"></circle>
                  <circle cx="218.2" cy="194.2" r="2.2"></circle>
                  <circle cx="26.2" cy="194.2" r="2.2"></circle>
                  <circle cx="242.2" cy="194.2" r="2.2"></circle>
                  <circle cx="50.2" cy="194.2" r="2.2"></circle>
                  <circle cx="266.2" cy="194.2" r="2.2"></circle>
                  <circle cx="74.2" cy="194.2" r="2.2"></circle>
                  <circle cx="290.2" cy="194.2" r="2.2"></circle>
                  <circle cx="98.2" cy="194.2" r="2.2"></circle>
                  <circle cx="314.2" cy="194.2" r="2.2"></circle>
                  <circle cx="122.2" cy="194.2" r="2.2"></circle>
                  <circle cx="338.2" cy="194.2" r="2.2"></circle>
                  <circle cx="146.2" cy="194.2" r="2.2"></circle>
                  <circle cx="170.2" cy="194.2" r="2.2"></circle>
                  <circle cx="194.2" cy="218.2" r="2.2"></circle>
                  <circle cx="2.2" cy="218.2" r="2.2"></circle>
                  <circle cx="218.2" cy="218.2" r="2.2"></circle>
                  <circle cx="26.2" cy="218.2" r="2.2"></circle>
                  <circle cx="242.2" cy="218.2" r="2.2"></circle>
                  <circle cx="50.2" cy="218.2" r="2.2"></circle>
                  <circle cx="266.2" cy="218.2" r="2.2"></circle>
                  <circle cx="74.2" cy="218.2" r="2.2"></circle>
                  <circle cx="290.2" cy="218.2" r="2.2"></circle>
                  <circle cx="98.2" cy="218.2" r="2.2"></circle>
                  <circle cx="314.2" cy="218.2" r="2.2"></circle>
                  <circle cx="122.2" cy="218.2" r="2.2"></circle>
                  <circle cx="338.2" cy="218.2" r="2.2"></circle>
                  <circle cx="146.2" cy="218.2" r="2.2"></circle>
                  <circle cx="170.2" cy="218.2" r="2.2"></circle>
                  <circle cx="194.2" cy="242.2" r="2.2"></circle>
                  <circle cx="2.2" cy="242.2" r="2.2"></circle>
                  <circle cx="218.2" cy="242.2" r="2.2"></circle>
                  <circle cx="26.2" cy="242.2" r="2.2"></circle>
                  <circle cx="242.2" cy="242.2" r="2.2"></circle>
                  <circle cx="50.2" cy="242.2" r="2.2"></circle>
                  <circle cx="266.2" cy="242.2" r="2.2"></circle>
                  <circle cx="74.2" cy="242.2" r="2.2"></circle>
                  <circle cx="290.2" cy="242.2" r="2.2"></circle>
                  <circle cx="98.2" cy="242.2" r="2.2"></circle>
                  <circle cx="314.2" cy="242.2" r="2.2"></circle>
                  <circle cx="122.2" cy="242.2" r="2.2"></circle>
                  <circle cx="338.2" cy="242.2" r="2.2"></circle>
                  <circle cx="146.2" cy="242.2" r="2.2"></circle>
                  <circle cx="170.2" cy="242.2" r="2.2"></circle>
                  <circle cx="194.2" cy="266.2" r="2.2"></circle>
                  <circle cx="2.2" cy="266.2" r="2.2"></circle>
                  <circle cx="218.2" cy="266.2" r="2.2"></circle>
                  <circle cx="26.2" cy="266.2" r="2.2"></circle>
                  <circle cx="242.2" cy="266.2" r="2.2"></circle>
                  <circle cx="50.2" cy="266.2" r="2.2"></circle>
                  <circle cx="266.2" cy="266.2" r="2.2"></circle>
                  <circle cx="74.2" cy="266.2" r="2.2"></circle>
                  <circle cx="290.2" cy="266.2" r="2.2"></circle>
                  <circle cx="98.2" cy="266.2" r="2.2"></circle>
                  <circle cx="314.2" cy="266.2" r="2.2"></circle>
                  <circle cx="122.2" cy="266.2" r="2.2"></circle>
                  <circle cx="338.2" cy="266.2" r="2.2"></circle>
                  <circle cx="146.2" cy="266.2" r="2.2"></circle>
                  <circle cx="170.2" cy="266.2" r="2.2"></circle>
                  <circle cx="194.2" cy="290.2" r="2.2"></circle>
                  <circle cx="2.2" cy="290.2" r="2.2"></circle>
                  <circle cx="218.2" cy="290.2" r="2.2"></circle>
                  <circle cx="26.2" cy="290.2" r="2.2"></circle>
                  <circle cx="242.2" cy="290.2" r="2.2"></circle>
                  <circle cx="50.2" cy="290.2" r="2.2"></circle>
                  <circle cx="266.2" cy="290.2" r="2.2"></circle>
                  <circle cx="74.2" cy="290.2" r="2.2"></circle>
                  <circle cx="290.2" cy="290.2" r="2.2"></circle>
                  <circle cx="98.2" cy="290.2" r="2.2"></circle>
                  <circle cx="314.2" cy="290.2" r="2.2"></circle>
                  <circle cx="122.2" cy="290.2" r="2.2"></circle>
                  <circle cx="338.2" cy="290.2" r="2.2"></circle>
                  <circle cx="146.2" cy="290.2" r="2.2"></circle>
                  <circle cx="170.2" cy="290.2" r="2.2"></circle>
                  <circle cx="194.2" cy="314.2" r="2.2"></circle>
                  <circle cx="2.2" cy="314.2" r="2.2"></circle>
                  <circle cx="218.2" cy="314.2" r="2.2"></circle>
                  <circle cx="26.2" cy="314.2" r="2.2"></circle>
                  <circle cx="242.2" cy="314.2" r="2.2"></circle>
                  <circle cx="50.2" cy="314.2" r="2.2"></circle>
                  <circle cx="266.2" cy="314.2" r="2.2"></circle>
                  <circle cx="74.2" cy="314.2" r="2.2"></circle>
                  <circle cx="290.2" cy="314.2" r="2.2"></circle>
                  <circle cx="98.2" cy="314.2" r="2.2"></circle>
                  <circle cx="314.2" cy="314.2" r="2.2"></circle>
                  <circle cx="122.2" cy="314.2" r="2.2"></circle>
                  <circle cx="338.2" cy="314.2" r="2.2"></circle>
                  <circle cx="146.2" cy="314.2" r="2.2"></circle>
                  <circle cx="170.2" cy="314.2" r="2.2"></circle>
                  <circle cx="194.2" cy="338.2" r="2.2"></circle>
                  <circle cx="2.2" cy="338.2" r="2.2"></circle>
                  <circle cx="218.2" cy="338.2" r="2.2"></circle>
                  <circle cx="26.2" cy="338.2" r="2.2"></circle>
                  <circle cx="242.2" cy="338.2" r="2.2"></circle>
                  <circle cx="50.2" cy="338.2" r="2.2"></circle>
                  <circle cx="266.2" cy="338.2" r="2.2"></circle>
                  <circle cx="74.2" cy="338.2" r="2.2"></circle>
                  <circle cx="290.2" cy="338.2" r="2.2"></circle>
                  <circle cx="98.2" cy="338.2" r="2.2"></circle>
                  <circle cx="314.2" cy="338.2" r="2.2"></circle>
                  <circle cx="122.2" cy="338.2" r="2.2"></circle>
                  <circle cx="338.2" cy="338.2" r="2.2"></circle>
                  <circle cx="146.2" cy="338.2" r="2.2"></circle>
                  <circle cx="170.2" cy="338.2" r="2.2"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 self-center">
            <div className="lg:pl-10">
              <div className="mb-8 md:w-3/4 md:mb-10 lg:w-auto xl:mb-12">
                <h2 className="text-headingColor font-bold font-heading text-2xl leading-8 mb-3 md:text-5xl md:leading-[3.5rem] xl:mb-6 xl:text-5xl xl:leading-[4rem] dark:text-gray-100">
                  The Best Holidays Start Here!
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Book your hotel with us and don't forget to grab an awesome
                  hotel deal to save massive on your stay.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-y-8 md:gap-x-10 md:gap-y-10 lg:gap-x-8 lg:gap-y-8 xl:gap-x-12">
                <div className="col-span-4 md:col-span-2">
                  <div className="h-14 w-14 flex justify-center items-center bg-emerald-500/[0.1] text-emerald-500 rounded-full mb-3">
                    <FaUtensils className="inline-block w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold dark:text-gray-100 mb-1 md:text-xl md:mb-2">
                    Quality Food
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <div className="h-14 w-14 flex justify-center items-center bg-red-500/[0.1] text-red-500 rounded-full mb-3">
                    <BsStopwatchFill className="inline-block w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold dark:text-gray-100 mb-1 md:text-xl md:mb-2">
                    Quick Services
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Supposing so be resolving breakfast am or perfectly.
                  </p>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <div className="h-14 w-14 flex justify-center items-center bg-orange-500/[0.1] text-orange-500 rounded-full mb-3">
                    <BsShieldFillCheck className="inline-block w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold dark:text-gray-100 mb-1 md:text-xl md:mb-2">
                    High Security
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Arranging rapturous did believe him all had supported.
                  </p>
                </div>
                <div className="col-span-4 md:col-span-2">
                  <div className="h-14 w-14 flex justify-center items-center bg-teal-500/[0.1] text-teal-500 rounded-full mb-3">
                    <BsLightningFill className="inline-block w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold dark:text-gray-100 mb-1 md:text-xl md:mb-2">
                    24 Hours Alert
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Rapturous did believe him all had supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
