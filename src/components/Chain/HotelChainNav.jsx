import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const HotelChainNav = () => {
  const [toggle, setToggle] = useState(false);

  const { lightTheme, darkTheme, systemTheme, theme } =
    useContext(ThemeContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className="relative container mx-auto pt-4 lg:pb-2 pb-4 flex justify-between items-center">
        <a href="#">
          <img
            className="h-[30px] sm:h-[40px] md:h-[60px]"
            src="../src/img/logo-hotel.svg"
            alt=""
          />
        </a>
        <div className="flex justify-between items-center gap-3 font-body">
          <div
            onClick={handleToggle}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="lg:hidden h-[22px] w-[22px] flex flex-col gap-1.5 items-center justify-center">
              <div
                className={`w-full h-[2px] bg-headingColor dark:bg-grayPara duration-200 ${
                  toggle && "rotate-45 translate-y-2 "
                }`}
              ></div>
              <div
                className={`w-full h-[2px] bg-headingColor dark:bg-grayPara ${
                  toggle && "opacity-0"
                }`}
              ></div>
              <div
                className={`w-full h-[2px] bg-headingColor dark:bg-grayPara duration-200 ${
                  toggle && "-rotate-45 -translate-y-2"
                }`}
              ></div>
            </div>

            <p className="text-lg lg:hidden hidden sm:block dark:text-grayPara">
              Menu
            </p>
          </div>

          <div>
            <div className="hidden lg:flex border-b border-bodyColor border-opacity-30">
              <ul className="flex text-sm text-bodyColor dark:text-grayPara pb-2 pt-4">
                <li className="px-3 hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                  <div className="hs-dropdown [--placement:bottom-right] [--auto-close:outside] relative inline-flex">
                    <a href="#" className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      <span
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle"
                      >
                        Language
                      </span>
                    </a>
                    <div
                      className="z-20 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[10rem] bg-white dark:bg-cardDarkModeColor shadow-2xl rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                      aria-labelledby="hs-dropdown-default"
                    >
                      <a
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-beautifulBlue hover:bg-opacity-10 dark:text-grayPara font-medium dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue hover:text-beautifulBlue duration-300 focus:outline-none"
                        href="#"
                      >
                        <img
                          src="../../../src/img/uk.svg"
                          className="w-5 h-5"
                        />
                        English
                      </a>
                      <a
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-beautifulBlue hover:bg-opacity-10 dark:text-grayPara font-medium dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue hover:text-beautifulBlue duration-300 focus:outline-none"
                        href="#"
                      >
                        <img
                          src="../../../src/img/sp.svg"
                          className="w-5 h-5"
                        />
                        Espanol
                      </a>
                      <a
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-beautifulBlue hover:bg-opacity-10 dark:text-grayPara font-medium dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text- hover:text-beautifulBlue duration-300 focus:outline-none"
                        href="#"
                      >
                        <img
                          src="../../../src/img/fr.svg"
                          className="w-5 h-5"
                        />
                        Francis
                      </a>
                      <a
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor hover:bg-beautifulBlue hover:bg-opacity-10 dark:text-grayPara font-medium dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue hover:text-beautifulBlue duration-300 focus:outline-none"
                        href="#"
                      >
                        <img
                          src="../../../src/img/gr.svg"
                          className="w-5 h-5"
                        />
                        Deutsch
                      </a>
                    </div>
                  </div>
                </li>
                <li className="px-3 hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                  <a href="#" className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>My Trip</span>
                  </a>
                </li>
                <li className="px-3 hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                  <a href="#" className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    <span>Help</span>
                  </a>
                </li>
                <li className="px-3 hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                  <a href="#" className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span>Sign in or Login</span>
                  </a>
                </li>
                <li className="px-3 hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                  <div className="hs-dropdown [--placement:bottom-right] [--auto-close:outside] relative inline-flex">
                    <a href="#" className="flex items-center gap-1">
                      <span
                        id="hs-dropdown-default"
                        type="button"
                        className="hs-dropdown-toggle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="currentColor"
                          className="bi bi-circle-half theme-icon-active fa-fw fill-yellow-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#" />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="z-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[5rem] bg-white dark:bg-cardDarkModeColor shadow-2xl rounded-lg px-3 py-4 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                      aria-labelledby="hs-dropdown-default"
                    >
                      <a
                        onClick={lightTheme}
                        className={`group flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor font-medium dark:text-grayPara hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue dark:hover:text-darkModeBlue dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 duration-300 focus:outline-none ${
                          theme === "light" && "active"
                        }`}
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 group-hover:fill-beautifulBlue active1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          />
                        </svg>
                        Light
                      </a>
                      <a
                        onClick={darkTheme}
                        className={`group flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor font-medium dark:text-grayPara hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue dark:hover:text-darkModeBlue dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 duration-300 focus:outline-none ${
                          theme === "dark" && "active"
                        }`}
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-5 h-5 group-hover:fill-beautifulBlue ${
                            theme === "dark" && "active1"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                          />
                        </svg>
                        Dark
                      </a>
                      <a
                        onClick={systemTheme}
                        className={`group flex items-center gap-2 py-2 px-3 rounded-lg text-base text-bodyColor font-medium dark:text-grayPara hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue dark:hover:text-darkModeBlue dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 duration-300 focus:outline-none`}
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-circle-half theme-icon-active fa-fw fill-bodyColor group-hover:fill-beautifulBlue w-5 h-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#" />
                        </svg>
                        Auto
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-row gap-3 justify-end items-center overflow-hidden">
              {toggle && (
                <ul className="absolute left-0 top-[90%] z-10 bg-white dark:bg-bgDarkModeColor rounded-md w-full">
                  <li className="group text-bodyColor dark:text-grayPara cursor-pointer">
                    <div className="p-4 flex justify-between lg:justify-start lg:gap-[6px] items-center hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                      <a href="#">Find a hotel</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3 mt-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 mx-6 dark:bg-cardDarkModeColor pointer-events-none group-hover:pointer-events-auto duration-300 absolute left-0 right-0 z-10 max-w-full bg-white shadow-2xl p-6 rounded-lg">
                      <div className="flex flex-col lg:flex-row lg:gap-20">
                        {/* first Group */}
                        <div className="w-full lg:w-6/12">
                          <ye-h6>
                            <div className="flex gap-2 items-center font-bold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                className="bi bi-pin-map-fill fill-beautifulBlue dark:fill-darkModeBlue"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                                />
                              </svg>
                              Destination
                            </div>
                          </ye-h6>
                          <hr className="border-hrColor border-opacity-25 mt-2" />

                          <div className="flex flex-col lg:flex-row  lg:gap-4 py-4">
                            <div className="w-full lg:w-1/2">
                              <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    New York
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    California
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    New Jersey
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Canada
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Las vegas
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-full lg:w-1/2">
                              <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    London
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Singapore
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Malaysia
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    manhattan
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* second Group */}
                        <div className="w-full lg:w-3/12">
                          <ye-h6 className="flex gap-2 items-center font-bold">
                            <div className="flex gap-2 items-center font-bold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                className="bi bi-list-task fill-beautifulBlue dark:fill-darkModeBlue"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                                />
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                                <path
                                  fillRule="evenodd"
                                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                                />
                              </svg>
                              Hotel type
                            </div>
                          </ye-h6>

                          <hr className="border-hrColor border-opacity-25 mt-2" />

                          <div className="flex gap-8 py-4">
                            <div className="w-full">
                              <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    All
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Hotels
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Villas
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Palace
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Resorts
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a className="px-4" href="#">
                                    Restaurants
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* third Group */}
                        <div className="w-full lg:w-3/12">
                          <ye-h6 className="flex gap-2 items-center font-bold">
                            <div className="flex gap-2 items-center font-bold">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-grid-3x3-gap fill-beautifulBlue dark:fill-darkModeBlue"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                              </svg>
                              Category
                            </div>
                          </ye-h6>
                          <hr className="border-hrColor border-opacity-25 mt-2" />

                          <div className="flex gap-8 py-4">
                            <div className="w-full">
                              <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={18}
                                      viewBox="0 0 576 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"
                                      />
                                    </svg>
                                    Beach
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={20}
                                      viewBox="0 0 640 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
                                      />
                                    </svg>
                                    City
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={18}
                                      viewBox="0 0 576 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"
                                      />
                                    </svg>
                                    Spa
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={20}
                                      viewBox="0 0 640 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"
                                      />
                                    </svg>
                                    Wildlife
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={12}
                                      viewBox="0 0 384 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M384 192c0 66.8-34.1 125.6-85.8 160H85.8C34.1 317.6 0 258.8 0 192C0 86 86 0 192 0S384 86 384 192zM242.1 256.6c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zm-52.3-49.3c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4c0 18.5-15 33.5-33.5 33.5zm113.5-17.5c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zM96 416c0-17.7 14.3-32 32-32h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H240c-8.8 0-16 7.2-16 16v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V464c0-8.8-7.2-16-16-16H128c-17.7 0-32-14.3-32-32z"
                                      />
                                    </svg>
                                    Golf
                                  </a>
                                </li>
                                <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                  <a
                                    className="px-4 flex items-center gap-2"
                                    href="#"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height={16}
                                      width={16}
                                      viewBox="0 0 512 512"
                                      className="fill-bodyColor"
                                    >
                                      <path
                                        opacity={1}
                                        d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
                                      />
                                    </svg>
                                    Heritage
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fourth Group */}
                      <div className="relative mt-[25px] bg-[url('../../../src/img/headerBg.jpg')] bg-cover bg-left md:h-[180px] rounded-xl overflow-hidden  lg:h-[97px]">
                        <div className="absolute top-0 left-0 z-10 bg-headingColor bg-opacity-50 w-full h-full "></div>
                        <div className="relative z-20 w-full max-h-full p-5 flex lg:flex-row flex-col justify-center items-start gap-4 lg:justify-between lg:items-center">
                          <div>
                            <ye-h5>
                              <div className="text-white mb-2 lg:mb-1">
                                Enjoy Great Times with us
                              </div>
                            </ye-h5>
                            <ul className="flex gap-x-4 flex-wrap text-white">
                              <li className="flex gap-1 items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  className="bi bi-patch-check-fill fill-white"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                Get 1000 bonus points on every stay
                              </li>
                              <li className="flex gap-1 items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  className="bi bi-patch-check-fill fill-white"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                Earn through Dec 15
                              </li>
                              <li className="flex gap-1 items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  className="bi bi-patch-check-fill fill-white"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                                Redeem for free night and more
                              </li>
                            </ul>
                          </div>
                          <a
                            className="font-body bg-white border-white border text-headingColor font-bold tracking-widest px-5 py-2 text-md rounded-md hover:bg-opacity-90 duration-500"
                            href="#"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className="dark:opacity-10" />
                  <li className="group text-bodyColor dark:text-grayPara cursor-pointer">
                    <div className="p-4 flex justify-between lg:justify-start lg:gap-[6px] items-center hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                      <a href="#">Hotel Facilities</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3 mt-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 mx-6 dark:bg-cardDarkModeColor pointer-events-none group-hover:pointer-events-auto duration-300 absolute left-0 right-0 z-10 max-w-full bg-white shadow-2xl p-6 rounded-lg">
                      <ul className="flex flex-col text-bodyColor dark:text-grayPara">
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Banquet
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Conference and meeting
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Fitness Room
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Health Club
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Sauna and steam bath
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Luggage storage
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Summer terrace
                          </a>
                        </li>
                        <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                          <a className="px-4 flex items-center gap-2" href="#">
                            Non-smoking rooms
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              )}
              <ul className="hidden absolute left-0 top-[90%] z-10 bg-white dark:bg-bgDarkModeColor dark:text-grayPara rounded-md w-full lg:w-fit text-base lg:static lg:flex ">
                <li className="group cursor-pointer">
                  <div className="p-4 flex justify-between lg:justify-start lg:gap-[6px] items-center hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                    <a href="#">Find a hotel</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-300 absolute left-0 right-0 z-10 max-w-full mx-auto bg-white dark:bg-cardDarkModeColor font-medium shadow-2xl p-6 rounded-lg overflow-y-scroll h-[300px] lg:h-auto lg:overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                      {/* first Group */}
                      <div className="w-full lg:w-6/12">
                        <ye-h6>
                          <div className="flex gap-2 items-center font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              className="bi bi-pin-map-fill fill-beautifulBlue dark:fill-darkModeBlue"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                              />
                            </svg>
                            Destination
                          </div>
                        </ye-h6>
                        <hr className="border-hrColor border-opacity-25 mt-2" />

                        <div className="flex flex-col lg:flex-row lg:gap-4 py-4">
                          <div className="w-full lg:w-1/2">
                            <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  New York
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  California
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  New Jersey
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Canada
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Las vegas
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-full lg:w-1/2">
                            <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  London
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Singapore
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Malaysia
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  manhattan
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* second Group */}
                      <div className="w-full lg:w-3/12">
                        <ye-h6 className="flex gap-2 items-center font-bold">
                          <div className="flex gap-2 items-center font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              className="bi bi-list-task fill-beautifulBlue dark:fill-darkModeBlue"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                              />
                              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                              <path
                                fillRule="evenodd"
                                d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                              />
                            </svg>
                            Hotel type
                          </div>
                        </ye-h6>
                        <hr className="border-hrColor border-opacity-25 mt-2" />

                        <div className="flex gap-8 py-4">
                          <div className="w-full">
                            <ul className="flex flex-col text-bodyColor dark:text-grayPara">
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  All
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Hotels
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Villas
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Palace
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Resorts
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a className="px-4" href="#">
                                  Restaurants
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* third Group */}
                      <div className="w-full lg:w-3/12">
                        <ye-h6>
                          <div className="flex gap-2 items-center font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-grid-3x3-gap fill-beautifulBlue dark:fill-darkModeBlue"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                            </svg>
                            Category
                          </div>
                        </ye-h6>
                        <hr className="border-hrColor border-opacity-25 mt-2" />

                        <div className="flex gap-8 py-4">
                          <div className="w-full">
                            <ul className="flex flex-col text-bodyColor dark:text-grayPara">
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={18}
                                    viewBox="0 0 576 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"
                                    />
                                  </svg>
                                  Beach
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={20}
                                    viewBox="0 0 640 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
                                    />
                                  </svg>
                                  City
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={18}
                                    viewBox="0 0 576 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"
                                    />
                                  </svg>
                                  Spa
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={20}
                                    viewBox="0 0 640 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"
                                    />
                                  </svg>
                                  Wildlife
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={12}
                                    viewBox="0 0 384 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M384 192c0 66.8-34.1 125.6-85.8 160H85.8C34.1 317.6 0 258.8 0 192C0 86 86 0 192 0S384 86 384 192zM242.1 256.6c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zm-52.3-49.3c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4c0 18.5-15 33.5-33.5 33.5zm113.5-17.5c0 18.5-15 33.5-33.5 33.5c-4.9 0-9.1 5.1-5.4 8.4c5.9 5.2 13.7 8.4 22.1 8.4c18.5 0 33.5-15 33.5-33.5c0-8.5-3.2-16.2-8.4-22.1c-3.3-3.7-8.4 .5-8.4 5.4zM96 416c0-17.7 14.3-32 32-32h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H240c-8.8 0-16 7.2-16 16v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V464c0-8.8-7.2-16-16-16H128c-17.7 0-32-14.3-32-32z"
                                    />
                                  </svg>
                                  Golf
                                </a>
                              </li>
                              <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                                <a
                                  className="px-4 flex items-center gap-2"
                                  href="#"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={16}
                                    width={16}
                                    viewBox="0 0 512 512"
                                    className="fill-bodyColor"
                                  >
                                    <path
                                      opacity={1}
                                      d="M120 0c13.3 0 24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24v8V64v64c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H416V352H384V224H352V128H320v96h32V352h32V512H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H128V352h32V224h32V128H160v96H128V352H96V512H32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32V256c0-17.7 14.3-32 32-32V160c0-17.7 14.3-32 32-32V64 32 24c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32v48h64V304c0-17.7-14.3-32-32-32zm-32-80v32h64V192c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
                                    />
                                  </svg>
                                  Heritage
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Fourth Group */}
                    <div className="relative mt-[25px] bg-[url('../../../src/img/headerBg.jpg')] bg-cover bg-left md:h-[180px] rounded-xl overflow-hidden  lg:h-[97px]">
                      <div className="absolute top-0 left-0 z-10 bg-headingColor bg-opacity-50 w-full h-full "></div>
                      <div className="relative z-20 w-full max-h-full p-5 flex lg:flex-row flex-col justify-center items-start gap-4 lg:justify-between lg:items-center">
                        <div className="text-white">
                          <div className="text-white mb-2 lg:mb-1">
                            <ye-h5>Enjoy Great Times with us</ye-h5>
                          </div>
                          <ul className="flex gap-x-4 flex-wrap text-white">
                            <li className="flex gap-1 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                className="bi bi-patch-check-fill fill-white"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                              </svg>
                              Get 1000 bonus points on every stay
                            </li>
                            <li className="flex gap-1 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                className="bi bi-patch-check-fill fill-white"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                              </svg>
                              Earn through Dec 15
                            </li>
                            <li className="flex gap-1 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                className="bi bi-patch-check-fill fill-white"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                              </svg>
                              Redeem for free night and more
                            </li>
                          </ul>
                        </div>
                        <a
                          className="font-body bg-white border-white border text-headingColor font-bold tracking-widest px-5 py-2 text-md rounded-md hover:bg-opacity-90 duration-500"
                          href="#"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group cursor-pointer">
                  <div className="p-4 flex justify-between lg:justify-start lg:gap-[6px] items-center hover:text-beautifulBlue dark:hover:text-darkModeBlue duration-200">
                    <a href="#">Hotel Facilities</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3 mt-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-300 absolute z-10 bg-white dark:bg-cardDarkModeColor shadow-2xl rounded-lg px-[10px] py-4 w-full lg:max-w-[250px] overflow-y-scroll h-[200px] lg:h-auto lg:overflow-hidden">
                    <ul className="flex flex-col text-bodyColor font-medium dark:text-grayPara">
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Banquet
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Conference and meeting
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Fitness Room
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Health Club
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Sauna and steam bath
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Luggage storage
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Summer terrace
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4 flex items-center gap-2" href="#">
                          Non-smoking rooms
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
                <button
                  id="hs-dropdown-auto-close-outside"
                  type="button"
                  className="hs-dropdown-toggle font-body bg-beautifulBlue hover:bg-hoverBgBeautifulBlue hover:border-hoverBgBeautifulBlue border-beautifulBlue dark:bg-darkModeBlue dark:border-darkModeBlue dark:hover:bg-hoverDarkModeBlue dark:hover:border-hoverDarkModeBlue duration-500 border text-white font-bold text-[13px] tracking-widest px-4 py-[3px] rounded-md flex gap-1 items-center"
                >
                  Book stay
                  <svg
                    className="hs-dropdown-open:rotate-180 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
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
                  className="z-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[22rem] bg-white dark:bg-cardDarkModeColor shadow-2xl rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                  aria-labelledby="hs-dropdown-auto-close-outside"
                >
                  <ye-h6>
                    <div className="font-heading font-bold px-6  py-4">
                      Search your Destination
                    </div>
                  </ye-h6>
                  <hr className="dark:opacity-10" />
                  <div className="px-6 py-4 flex flex-col gap-5">
                    <div>
                      <label
                        className="text-bodyColor dark:text-grayPara"
                        htmlFor="location"
                      >
                        Hotel or Destination
                      </label>
                      <select className="py-3 px-3 block w-full border-someGray bg-someGray text-bodyColor dark:bg-bgDarkModeColor dark:text-grayPara rounded-lg focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none">
                        <option>Select Location</option>
                        <option>San Jacinto, USA</option>
                        <option>North Dakota, Canada</option>
                        <option>West Virginia, Paris</option>
                      </select>
                    </div>

                    <div className="flex gap-4 text-bodyColor">
                      <div className="flex flex-col max-w-[150px]">
                        <label
                          className="text-bodyColor dark:text-grayPara"
                          htmlFor="#"
                        >
                          Check in
                        </label>
                        <input
                          type="text"
                          placeholder="Select date"
                          className="bg-someGray py-3 px-4 rounded-md dark:bg-bgDarkModeColor"
                        />
                      </div>
                      <div className="flex flex-col max-w-[150px]">
                        <label
                          className="text-bodyColor dark:text-grayPara"
                          htmlFor="#"
                        >
                          Check out
                        </label>
                        <input
                          type="text"
                          placeholder="Select date"
                          className="bg-someGray py-3 px-4 rounded-md dark:bg-bgDarkModeColor"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        className="text-bodyColor dark:text-grayPara"
                        htmlFor="#"
                      >
                        Guests & rooms
                      </label>
                      <input
                        type="text"
                        className="bg-someGray py-3 px-4 rounded-md dark:bg-bgDarkModeColor dark:text-white"
                        placeholder="2 Guests 1 Room"
                      />
                    </div>

                    <a
                      className="underline text-bodyColor text-center"
                      href="#"
                    >
                      Have a promo code?
                    </a>

                    <button className="text-beautifulBlue bg-beautifulBlue dark:bg-darkModeBlue2 dark:bg-opacity-10 dark:text-darkModeBlue dark:hover:bg-darkModeBlue bg-opacity-10 py-2 rounded-md hover:bg-beautifulBlue hover:text-white duration-300 font-bold tracking-wider">
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HotelChainNav;
