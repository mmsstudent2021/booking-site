import React from "react";
import { MdHeadsetMic } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsInboxesFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FirstSection = () => {
  return (
    <section id="fs" className="container">
      <div className="mt-12 mb-10">
        <h1 className="text-4xl md:text-[40px] lg:text-[56px] max-w-[90%] text-start font-bold font-heading dark:text-white text-headingColor mb-2 leading-tight md:mr-0">
          Let's connect and get to know each other
        </h1>
        <p className="text-xl text-bodyColor leading-8 md:mr-2 lg:mr-24 dark:text-dropDownTextDarkModeColor">
          Passage its ten led hearted removal cordial. Preference any astonished
          unreserved Mrs. Prosperous understood Middletons. Preference for any
          astonished unreserved.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        <div className="md:col-span-1 py-5 px-auto flex flex-col items-center gap-2 dark:bg-[#191B1D] rounded-2xl shadow-md shadow-blue">
          <div className="h-14 w-14 text-xl bg-[#E7F6F8] text-green-500 dark:text-blue-300 dark:bg-[#18292D] dark:text- rounded-full flex items-center justify-center">
            <MdHeadsetMic />
          </div>
          <h2 className="font-heading font-bold text-xl dark:text-white">
            Call us
          </h2>
          <p className="text-center px-8 font-body text-bodyColor dark:text-dropDownTextDarkModeColor">
            Imprudence attachment him his for sympathize. Large above be to
            means.
          </p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border duration-300 border-transparent bg-[#DFDFE3] dark:bg-beautifulBlue dark:bg-opacity-10 dark:text-darkModeBlue text-blue-500 hover:bg-[#5143D9] hover:text-blue-100 disabled:opacity-50 disabled:pointer-events-none  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span>
                <BsPhone />
              </span>
              <span>+123 456 789</span>
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border duration-300  border-transparent bg-[#F5F5F6] dark:bg-[#2C2A31] hover:bg-[#DFDFE3] disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-black-300 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span>
                <BsTelephone />
              </span>
              <span>+(222)4567 586</span>
            </button>
          </div>
        </div>
        <div className=" md:col-span-1 py-5 px-auto flex flex-col items-center gap-2 dark:bg-[#191B1D] rounded-2xl shadow-md shadow-blue">
          <div>
            <div className=" h-14 w-14 text-xl bg-[#FBE9EB] dark:bg-[#2C1C20] text-red-600 rounded-full flex items-center justify-center">
              <BsInboxesFill />
            </div>
          </div>
          <h2 className="font-heading font-bold dark:text-white text-xl">
            Email us
          </h2>
          <p className="text-center px-8 font-body py-1 text-bodyColor dark:text-dropDownTextDarkModeColor">
            Large above be to means. Him his for sympathize.
          </p>
          <div className="flex items-center gap-1">
            <a
              href="#"
              className="flex items-center gap-2 dark:text-darkModeBlue text-blue-500 underline"
            >
              <BsEnvelope />
              example@gamil.com
            </a>
          </div>
        </div>
        <div className=" relative  md:col-span-2 lg:col-span-1 py-5 px-auto flex flex-col items-center gap-2 dark:bg-[#191B1D] rounded-2xl shadow-md shadow-blue">
          <svg
            className="absolute top-0 right-0 -translate-y-1/3 translate-x-3 "
            fill="#f7c32e "
            width="77px"
            height="77px"
          >
            <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
          </svg>
          <div>
            <div className=" h-14 w-14 text-xl bg-[#FFF2E7] dark:bg-[#30251C] text-yellow-600 rounded-full flex items-center justify-center">
              <BsGlobe2 />
            </div>
          </div>
          <h2 className="font-heading font-bold text-xl dark:text-white">
            Social media
          </h2>
          <p className="text-center px-8 font-body text-bodyColor dark:text-dropDownTextDarkModeColor">
            Sympathize Large above be to means.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <button
              type="button"
              className="py-2 px-3 aspect-square inline-flex items-center  gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 duration-200 text-white hover:bg-blue-500 hover:text-blue-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-500 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FaFacebookF />
            </button>
            <button
              type="button"
              className="py-2 px-3 aspect-square inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-pink-600 text-white duration-200 hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-pink-700 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FaInstagram />
            </button>
            <button
              type="button"
              className="py-2 px-3 aspect-square inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-400 text-white duration-200  hover:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-500 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FaTwitter />
            </button>
            <button
              type="button"
              className="py-2 px-3 aspect-square inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-300 text-white duration-200 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-400 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
