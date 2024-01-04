import React, { useContext } from "react";
import {
  FaCircleInfo,
  FaGear,
  FaPowerOff,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa6";
import { BsCircleHalf, BsMoonStars, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

const ProfileDropdown = () => {
  const {lightTheme, darkTheme, systemTheme, theme} = useContext(ThemeContext);
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button id="hs-dropdown" type="button" className="hs-dropdown-toggle">
        <img
          src="./01.jpg"
          className="w-8 h-8 rounded-md lg:w-10 lg:h-10"
          alt=""
        />
      </button>
      <div
        className="hs-dropdown-menu w-4/5 md:w-64 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg dark:bg-dark dark:border dark:border-gray-700 dark:divide-gray-700"
        aria-labelledby="hs-dropdown"
      >
        <div className="p-4 flex items-center gap-x-4">
          <img
            src="./01.jpg"
            className="w-10 h-10 rounded-full object-cover object-center md:w-12 md:h-12"
            alt=""
          />
          <div className="">
            <h4 className="font-bold leading-none text-blue-500 mb-1 dark:text-blue-300">
              Lori Ferguson
            </h4>
            <p className="text-sm text-gray-500">example@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="p-2">
          <a
            className="font-medium text-gray-500 py-2 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1]"
            href="#!"
          >
            <FaRegBookmark />
            My Bookings
          </a>
          <a
            className="font-medium text-gray-500 py-2 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1]"
            href="#!"
          >
            <FaRegHeart />
            My Wishlist
          </a>
          <a
            className="font-medium text-gray-500 py-2 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1]"
            href="#!"
          >
            <FaGear />
            Settings
          </a>
          <a
            className="font-medium text-gray-500 py-2 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1]"
            href="#!"
          >
            <FaCircleInfo />
            Help Center
          </a>
          <a
            className="font-medium text-gray-500 py-2 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-red-500 hover:bg-red-500/[0.1] dark:text-gray-400"
            href="#!"
          >
            <FaPowerOff />
            Sign Out
          </a>
        </div>
        <hr />
        <div className="p-4 flex items-center gap-x-4">
          <p className=" text-gray-500 dark:text-gray-400">Mode :</p>
          <div className="flex gap-x-4">
            <div className="hs-tooltip [--placement:top]">
              <button onClick={lightTheme} className={`theme-btn hs-tooltip-toggle font-medium text-blue-300 py-3 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-primary-300 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1] ${theme === "light" && "active"}`}>
                <BsSun />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-2 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-gray-100 dark:text-gray-900"
                  role="tooltip"
                >
                  Light
                </span>
              </button>
            </div>
            <div className="hs-tooltip [--placement:top]">
              <button onClick={darkTheme} className={`theme-btn hs-tooltip-toggle font-medium text-blue-300 py-3 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-primary-300 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1] ${theme === "dark" && "active"}`}>
                <BsMoonStars />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-2 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-gray-100 dark:text-gray-900"
                  role="tooltip"
                >
                  Dark
                </span>
              </button>
            </div>
            <div className="hs-tooltip [--placement:top]">
              <button onClick={systemTheme} className="hs-tooltip-toggle font-medium text-blue-300 py-3 px-3 rounded-md outline-none duration-200 flex items-center gap-x-2 hover:text-blue-500 hover:bg-blue-300/[0.1] dark:text-primary-300 dark:hover:text-blue-300 dark:hover:bg-blue-300/[0.1]">
                <BsCircleHalf />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-2 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-gray-100 dark:text-gray-900"
                  role="tooltip"
                >
                  System
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
