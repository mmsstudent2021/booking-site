import React, { useContext, useEffect, useState } from "react";
// import { FaAdjust } from "react-icons/fa";
import { LiaAdjustSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactHeader = () => {
  const [toggle, setToggle] = useState(false);

  const { lightTheme, darkTheme, systemTheme, theme } =
    useContext(ThemeContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [fixedNavbar, setFixedNavbar] = useState(false);
  useEffect(() => {
    new Waypoint({
      element: document.getElementById("fs"),
      handler: function (direction) {
        if (direction === "down") {
          setFixedNavbar(true);
        } else {
          setFixedNavbar(false);
        }
      },
      offset: "-40%",
    });
  });

  return (
    <header
      className={`bg-white dark:bg-bgDarkModeColor font-medium py-3 lg:py-8 z-[9999] w-full top-0 ${
        fixedNavbar && "fixed-navbar"
      }`}
    >
      <nav className="container">
        <section className="flex items-center ">
          {/* Logo */}
          <Link
            className="flex-none text-xl font-semibold dark:text-white md:mr-8 xl:mr-5"
            to="/"
          >
            <img
              src="./logo-dark.svg"
              className="nav-brand h-7 xl:h-10 dark:hidden"
              alt=""
            />
            <img
              src="./logo-light.svg"
              className="nav-brand h-7 xl:h-10 hidden dark:block"
              alt=""
            />
          </Link>

          {/* Hamburger Menu */}
          <div
            onClick={handleToggle}
            className="hs-collapse-toggle lg:hidden cursor-pointer flex items-center ml-auto mr-4"
            id="hs-basic-collapse"
            data-hs-collapse="#hs-basic-collapse-heading"
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
          </div>

          {/* Nav */}
          <div
            id="hs-basic-collapse-heading"
            className="hs-collapse hidden absolute top-16 left-0 z-40 transition-[height] duration-300 overflow-hidden lg:mx-auto lg:flex lg:items-center lg:static w-full lg:w-fit bg-white dark:bg-bgDarkModeColor dark:text-grayPara shadow-md lg:shadow-none rounded-md lg:rounded-none"
            aria-labelledby="hs-basic-collapse"
          >
            {/* home */}
            <div className="hs-dropdown [--auto-close:inside] [--strategy:static] xl:[--strategy:fixed] [--adaptive:none] w-full lg:w-fit [--placement:bottom-left]">
              <button
                id="dropdown1"
                type="button"
                className="hs-dropdown-toggle group inline-flex w-full px-6 py-3 lg:px-4 lg:py-0 justify-between items-center gap-x-2"
              >
                <a
                  className="text-headingColor dark:text-grayPara  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-darkModeBlue2"
                  href="#"
                >
                  Home
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 mt-[2px]  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-hoverDarkModeBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 max-w-full lg:px-0 hidden z-10  dark:bg-bgDarkModeColor rounded-lg"
                aria-labelledby="dropdown1"
              >
                <div className="border mb-4 bg-white lg:shadow-md dark:bg-cardDarkModeColor lg:mx-0 dark:border-none lg:border-none p-4 mx-4 rounded-lg">
                  <div className="w-full">
                    <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <Link className="px-4" to="/">
                          Hotel Home
                        </Link>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <Link className="px-4" to="/hotel-chain">
                          Hotel Chain
                        </Link>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Hotel Resort
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Flight Home
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Tour Home
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Cabs Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="dark:opacity-10" />
            {/* listings */}
            <div className="hs-dropdown [--auto-close:inside] [--strategy:static] xl:[--strategy:fixed] [--adaptive:none] w-full lg:w-fit [--placement:bottom-left] group">
              <button
                id="dropdown1"
                type="button"
                className="hs-dropdown-toggle inline-flex w-full px-6 py-3 lg:px-4 lg:py-0 justify-between items-center gap-x-2"
              >
                <a
                  className="text-headingColor dark:text-grayPara  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-darkModeBlue2"
                  href="#"
                >
                  Listings
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 mt-[2px]  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-hoverDarkModeBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 max-w-full lg:px-0 hidden z-10  dark:bg-bgDarkModeColor rounded-lg"
                aria-labelledby="dropdown1"
              >
                <div className="border mb-4 bg-white lg:shadow-md dark:bg-cardDarkModeColor lg:mx-0 dark:border-none lg:border-none p-4 mx-4 rounded-lg">
                  <div className="w-full">
                    <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Hotel
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Flight
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Tour
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Cab
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Directory
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Add Listing
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Booking Confirmed
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Compare Listing
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Offer Detail
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="dark:opacity-10" />
            {/* pages */}
            <div className="hs-dropdown [--auto-close:inside] [--strategy:static] xl:[--strategy:fixed] [--adaptive:none] w-full lg:w-fit [--placement:bottom-left] group">
              <button
                id="dropdown1"
                type="button"
                className="hs-dropdown-toggle inline-flex w-full px-6 py-3 lg:px-4 lg:py-0 justify-between items-center gap-x-2"
              >
                <a
                  className="text-headingColor dark:text-grayPara  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-darkModeBlue2"
                  href="#"
                >
                  Pages
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 mt-[2px]  group-hover:text-beautifulBlue duration-200 dark:group:text-darkModeBlue dark:group-hover:text-hoverDarkModeBlue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 max-w-full lg:px-0 hidden z-10  dark:bg-bgDarkModeColor rounded-lg"
                aria-labelledby="dropdown1"
              >
                <div className="border mb-4 bg-white lg:shadow-md dark:bg-cardDarkModeColor lg:mx-0 dark:border-none lg:border-none p-4 mx-4 rounded-lg">
                  <div className="w-full">
                    <ul className="flex flex-col text-bodyColor dark:text-grayPara font-medium">
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          About
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <Link className="px-4" to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Contact2
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <Link className="px-4" to="/our-team">
                          Our Team
                        </Link>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Authentication
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Blog
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Help
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Pricing
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          FAQs
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Error 404
                        </a>
                      </li>
                      <li className="w-full py-2 rounded-lg hover:bg-beautifulBlue hover:bg-opacity-10 hover:text-beautifulBlue duration-200 dark:hover:bg-darkModeBlue2 dark:hover:bg-opacity-10 dark:hover:text-darkModeBlue">
                        <a className="px-4" href="#">
                          Coming Soon
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="dark:opacity-10" />
            {/* components */}
            <button
              id="dropdown1"
              type="button"
              className="hs-dropdown-toggle -hover:text-beautifulBlue duration-200 dark:text-darkModeBlue dark-hover:text-hoverDarkModeBlue inline-flex w-full px-6 py-3 lg:px-4 lg:py-0 justify-between items-center gap-x-2"
            >
              <a
                className="text-headingColor hover:text-beautifulBlue duration-200 dark:text-grayPara dark:hover:text-darkModeBlue2"
                href="#"
              >
                Components
              </a>
            </button>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
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
            <div className="hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside]">
              <button
                id="hs-dropdown-auto-close-inside"
                type="button"
                className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-xl text-graysome dark:text-grayPara disabled:opacity-50 disabled:pointer-events-none"
              >
                <BsSearch />
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white rounded-lg p-2  dark:bg-cardDarkModeColor shadow-md"
                aria-labelledby="hs-dropdown-auto-close-inside"
              >
                <div>
                  <label
                    htmlFor="hs-trailing-button-add-on"
                    className="sr-only"
                  >
                    Label
                  </label>
                  <div className="flex rounded-lg">
                    <input
                      type="text"
                      id="hs-trailing-button-add-on"
                      name="hs-trailing-button-add-on"
                      className="py-2 px-4 block w-full rounded-s-lg outline-none text-base focus:z-10 disabled:pointer-events-none dark:bg-bgDarkModeColor dark:text-gray-400 dark:focus:ring-gray-600 border border-beautifulBlue"
                      placeholder="Search.."
                    />
                    <button
                      type="button"
                      className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-e-md border border-transparent bg-beautifulBlue dark:bg-darkModeBlue text-white dark:hover:bg-hoverDarkModeBlue disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg border border-transparent bg-beautifulBlue hover:bg-hoverBgBeautifulBlue dark:bg-darkModeBlue text-white dark:hover:bg-hoverDarkModeBlue disabled:opacity-50 disabled:pointer-events-none"
            >
              <FaArrowRightToBracket />
              <span className="hidden sm:inline-block">Sign Up</span>
            </button>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default ContactHeader;
