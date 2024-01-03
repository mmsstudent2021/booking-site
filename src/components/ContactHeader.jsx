import React from "react";
// import { FaAdjust } from "react-icons/fa";
import { LiaAdjustSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ContactHeader = () => {
  return (
    <header  className="container " >
      <section className="flex justify-between items-center gap-x-8 my-8">
        <div>
          <img className="h-[40px] dark:hidden" src="./public/logo.svg" alt="" />
          <img className="h-[40px] hidden dark:block" src="./public/logo-light.svg" alt=""/>

        </div>
        <nav className="flex item-center gap-8">
          {/* home */}
          <div className="hs-dropdown relative inline-flex [--trigger:hover]">
            <button
              id="hs-dropdown-hover-event"
              type="button"
              className="hs-dropdown-toggle  inline-flex items-center gap-x-1 text-base font-medium rounded-lg  disabled:opacity-50 disabled:pointer-events-none hover:text-beautifulBlue   dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Home
              <svg
                className=" w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[10rem] bg-white shadow-xl rounded-lg p-3 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-hover-event"
            >
              <a
                className="flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-gray-100 focus:outline-none hover:text-beautifulBlue focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Hotel Home
              </a>
              <a
                className="flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-gray-100 focus:outline-none hover:text-beautifulBlue focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Hotel Chain
              </a>
              <a
                className="flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-gray-100 focus:outline-none hover:text-beautifulBlue focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Hotel Resort
              </a>
              <a
                className="flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-gray-100 focus:outline-none hover:text-beautifulBlue focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Flight Home
              </a>
              <a
                className="flex items-center justify-center gap-x-3.5 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-gray-100 focus:outline-none hover:text-beautifulBlue focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Tour Home
              </a>
              <a
                className="flex items-center justify-center gap-x-3.5  py-2 px-3 rounded-lg text-base hover:text-beautifulBlue text-bodyColor hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Cabs Home
              </a>
            </div>
          </div>
          {/* Listings */}
          <div className="hs-dropdown relative inline-flex [--trigger:hover]">
            <button
              id="hs-dropdown-hover-two"
              type="button"
              className="hs-dropdown-toggle  inline-flex items-center gap-x-1 text-base font-medium rounded-lg     disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Listings
              <svg
                className=" w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-xl rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-hover-two"
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-bodyColor hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Newsletter
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-bodyColor hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Purchases
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Downloads
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
          {/* pages */}
          <div className="hs-dropdown relative inline-flex [--trigger:hover]">
            <button
              id="hs-dropdown-hover-event"
              type="button"
              className="hs-dropdown-toggle  inline-flex items-center gap-x-1 text-base font-medium rounded-lg   disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Pages
              <svg
                className=" w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white drop-shadow-xl rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-hover-event"
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                About
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Contact
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Contact 2
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                Our Team
              </a>
            </div>
          </div>
          <a href="#" className="flex justify-center items-center duration-200 dark:text-white hover:text-beautifulBlue">
            Components
          </a>
        </nav>
        <div className="flex items-center justify-between gap-4">
          <div className="hs-dropdown relative inline-flex mt-2 [--placement:bottom-right]">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle  inline-flex items-center gap-x-2 text-2xl   rotate-180 font-medium text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-yellow-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <LiaAdjustSolid />
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration  hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[7rem] bg-white  shadow-md rounded-lg px-3 py-4 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:translate-x-0 after:w-full before:h-4 before:absolute before:-top-4 before:-translate-x-10 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <a
                className="flex items-center gap-x-1 py-2 px-3 justify-center rounded-lg text-base text-bodyColor hover:bg-blue-100 hover:text-beautifulBlue focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                <MdLightMode className="text-xl" /> Light
              </a>
              <a
                className="flex items-center gap-x-1 justify-center  py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-blue-100 focus:outline-none focus:bg-gray-100 hover:text-beautifulBlue dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                <BsFillMoonStarsFill /> Dark
              </a>
              <a
                className="flex items-center gap-x-1 py-2 px-3  justify-center rounded-lg text-base text-bodyColor hover:bg-blue-100 hover:text-beautifulBlue focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                href="#"
              >
                <LiaAdjustSolid className="text-2xl" /> Auto
              </a>
            </div>
          </div>
          <div className="mt-1 mx-1 sm:mt-1 hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside]">
            <button
              id="hs-dropdown-auto-close-inside"
              type="button"
              className="hs-dropdown-toggle  inline-flex items-center gap-x-2 text-xl text-bodyColor  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <BsSearch />
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white shadow-md rounded-lg p-2  dark:bg-gray-800 dark:border dark:border-gray-700"
              aria-labelledby="hs-dropdown-auto-close-inside"
            >
              <div>
                <label htmlFor="hs-trailing-button-add-on" className="sr-only">
                  Label
                </label>
                <div className="flex rounded-lg shadow-sm">
                  <input
                    type="text"
                    id="hs-trailing-button-add-on"
                    name="hs-trailing-button-add-on"
                    className="py-3 px-4 block w-full  shadow-sm  border border-blue-400 rounded-s-lg outline-none text-base focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Search.."
                  />
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <FaArrowRightToBracket />
            Sign Up
          </button>
        </div>
      </section>
    </header>
  );
};

export default ContactHeader;
