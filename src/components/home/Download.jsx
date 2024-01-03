import React from "react";
import { FaHandHoldingDollar, FaHandHoldingHeart } from "react-icons/fa6";

const Download = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#2a2c31]">
      <div className="container py-16">
        <div className="grid grid-cols-6 gap-y-5 md:gap-y-8 md:gap-x-8 lg::gap-x-5 lg:gap-y-0 xl:gap-x-10">
          <div className=" p-4 rounded-xl bg-white shadow-md col-span-6 md:col-span-3 lg:col-span-2 2xl:p-6 dark:bg-body-dark">
            <div className="flex gap-x-4 2xl:gap-x-5">
              <FaHandHoldingHeart className="text-6xl leading-none text-gray-800 dark:text-gray-100" />
              <div className="">
                <h4 className="font-heading font-bold text-lg mb-2 dark:text-gray-100">
                  24x7 Help
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  If we fall short of your expectation in any way, let us know
                </p>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl bg-white shadow-md col-span-6 md:col-span-3 lg:col-span-2 2xl:p-6 dark:bg-body-dark">
            <div className="flex gap-x-4 2xl:gap-x-5">
              <FaHandHoldingDollar className="text-6xl leading-none text-gray-800 dark:text-gray-100" />
              <div className="">
                <h4 className="font-heading font-bold text-lg mb-2 dark:text-gray-100">
                  Payment Trust
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  All refunds come with no questions asked guarantee
                </p>
              </div>
            </div>
          </div>
          <div className="lg:p-6 xl:px-10 col-span-6 md:col-span-3 lg:col-span-2">
            <div className="">
              <h4 className="font-heading font-bold text-lg mb-3 dark:text-gray-100">Download App</h4>
              <div className="grid grid-cols-2 gap-x-5">
                <a href="" className=" duration-300 hover:scale-105"><img src="./google-play.svg" className="w-full" alt="" /></a>
                <a href="" className=" duration-300 hover:scale-105"><img src="./app-store.svg" className="w-full" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
