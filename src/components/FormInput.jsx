import React from "react";

const FormInput = () => {
  return (
    <section className="container md:mt-5 lg:mt-20">
      <div className=" lg:flex item-center justify-between gap-10 py-4">
        <img
          src="./public/contact.svg"
          alt=""
          className="w-full  md:w-full  lg:w-1/2  lg:h-[442.391px] mt-10"
        />
        <div className="px-6 py-8 bg-slate-100 shadow-sm rounded-xl md:mt-5 relative dark:bg-black-500 ">
          <div className="flex flex-col gap-6 ">
            <h2 className="text-4xl font-bold font-heading dark:text-white">Send us message</h2>
            <div className="flex items-center justify-between text-bodyColor gap-6">
              <div className="flex flex-col gap-2 w-full ">
                <label className="dark:text-gray-300" >Your name *</label>
                <input
                  type="text"
                  className="py-3 px-4 block w-full border border-gray-400 dark:bg-black-500 dark:border-gray-300  rounded-lg text-sm  dark:focus:ring-blue-600 dark:outline-none focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="dark:text-gray-300" >Email address *</label >
                <input
                  type="text"
                  className="py-3 px-4 block w-full border border-gray-400 dark:border-gray-300 dark:bg-black-500 rounded-lg text-sm dark:focus:ring-blue-600 dark:outline-none focus:border-blue-500 focus:ring-blue-500 "
                />
              </div>
            </div>

            <div className="flex flex-col text-bodyColor gap-2">
              <label className="dark:text-gray-300" >Mobile number *</label >
              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-400 data:bg-gray-300 dark:bg-black-500 rounded-lg text-sm  dark:focus:ring-blue-600 dark:outline-none  focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-bodyColor gap-2">
              <label className="dark:text-gray-300" >Message *</label >
              <textarea
                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-500 dark:outline-none  dark:border-gray-700 dark:text-gray-400 dark:focus:ring-blue-600"
                rows={3}
              />
            </div>

            <div className="flex items-center text-bodyColor gap-2">
              <input
                type="checkbox"
                className=" w-4 h-4 rounded fill-blue-800 "
              />
              <p className="dark:text-gray-300">
                By submitting this form you agree to our terms and conditions.
              </p>
            </div>
            <button
              type="button"
              className="py-2 px-2  w-2/4 md:w-1/3 text-base font-bold tracking-wide rounded-lg border border-transparent bg-slate-800  text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Send Message
            </button>
          </div>
          <svg
            className="absolute top-[88%] right-0 translate-x-2"
            fill="#fd7e14 "
            width="104.2px"
            height="95.2px"
          >
            <circle cx="2.6" cy="92.6" r="2.6" />
            <circle cx="2.6" cy="77.6" r="2.6" />
            <circle cx="2.6" cy="62.6" r="2.6" />
            <circle cx="2.6" cy="47.6" r="2.6" />
            <circle cx="2.6" cy="32.6" r="2.6" />
            <circle cx="2.6" cy="17.6" r="2.6" />
            <circle cx="2.6" cy="2.6" r="2.6" />
            <circle cx="22.4" cy="92.6" r="2.6" />
            <circle cx="22.4" cy="77.6" r="2.6" />
            <circle cx="22.4" cy="62.6" r="2.6" />
            <circle cx="22.4" cy="47.6" r="2.6" />
            <circle cx="22.4" cy="32.6" r="2.6" />
            <circle cx="22.4" cy="17.6" r="2.6" />
            <circle cx="22.4" cy="2.6" r="2.6" />
            <circle cx="42.2" cy="92.6" r="2.6" />
            <circle cx="42.2" cy="77.6" r="2.6" />
            <circle cx="42.2" cy="62.6" r="2.6" />
            <circle cx="42.2" cy="47.6" r="2.6" />
            <circle cx="42.2" cy="32.6" r="2.6" />
            <circle cx="42.2" cy="17.6" r="2.6" />
            <circle cx="42.2" cy="2.6" r="2.6" />
            <circle cx="62" cy="92.6" r="2.6" />
            <circle cx="62" cy="77.6" r="2.6" />
            <circle cx="62" cy="62.6" r="2.6" />
            <circle cx="62" cy="47.6" r="2.6" />
            <circle cx="62" cy="32.6" r="2.6" />
            <circle cx="62" cy="17.6" r="2.6" />
            <circle cx="62" cy="2.6" r="2.6" />
            <circle cx="81.8" cy="92.6" r="2.6" />
            <circle cx="81.8" cy="77.6" r="2.6" />
            <circle cx="81.8" cy="62.6" r="2.6" />
            <circle cx="81.8" cy="47.6" r="2.6" />
            <circle cx="81.8" cy="32.6" r="2.6" />
            <circle cx="81.8" cy="17.6" r="2.6" />
            <circle cx="81.8" cy="2.6" r="2.6" />
            <circle cx="101.7" cy="92.6" r="2.6" />
            <circle cx="101.7" cy="77.6" r="2.6" />
            <circle cx="101.7" cy="62.6" r="2.6" />
            <circle cx="101.7" cy="47.6" r="2.6" />
            <circle cx="101.7" cy="32.6" r="2.6" />
            <circle cx="101.7" cy="17.6" r="2.6" />
            <circle cx="101.7" cy="2.6" r="2.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FormInput;
