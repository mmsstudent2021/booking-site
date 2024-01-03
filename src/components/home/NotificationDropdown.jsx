import React from "react";
import { FaRegBell } from "react-icons/fa6";

const NotificationDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button id="hs-dropdown" type="button" className="hs-dropdown-toggle">
        <div className=" w-8 h-8 bg-gray-100 rounded-md relative flex items-center justify-center duration-200 hover:bg-gray-200 lg:w-10 lg:h-10 dark:text-gray-100 dark:bg-white/[0.07] dark:hover:bg-white/[0.2]">
          <FaRegBell className="w-3.5 h-3.5" />
  
          <span className="flex absolute top-0 end-0 -mt-0.5 -me-0.5 lg:-me-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
            <span className="relative inline-flex text-xs bg-red-500 rounded-full p-1 lg:p-1.5"></span>
          </span>
        </div>
      </button>
      <div
        className="hs-dropdown-menu w-full md:w-80 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg dark:bg-dark dark:border dark:border-gray-700 dark:divide-gray-700"
        aria-labelledby="hs-dropdown"
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex gap-x-2">
            <h4 className="text-lg font-medium dark:text-gray-100">
              Notifications
            </h4>
            <span className="inline-block py-0.5 px-3 rounded text-sm bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
              4 new
            </span>
          </div>
          <a href="#!" className="text-blue-500 text-sm dark:text-blue-300">
            Clear All
          </a>
        </div>
        <hr />
        <div className="p-2 space-y-2">
          <a
            className="block text-gray-900 p-3 rounded duration-200 hover:bg-blue-300/[0.1] unread-noti"
            href="#!"
          >
            <h4 className="font-medium text-blue-500 mb-2 dark:text-blue-300">
              New! Booking flights from New York ✈️
            </h4>
            <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
              Find the flexible ticket on flights around the world. Start
              searching today
            </p>
            <span className="inline-block text-sm text-gray-700 dark:text-gray-400">
              Wednesday
            </span>
          </a>
          <a
            className="block text-gray-900 p-3 rounded duration-200 hover:bg-blue-300/[0.1]"
            href="#!"
          >
            <h4 className="font-medium text-blue-500 mb-2 dark:text-blue-300">
            Sunshine saving are here 🌞 save 30% or more on a stay
            </h4>
            <span className="inline-block text-sm text-gray-700 dark:text-gray-400">
            26 Jun 2020
            </span>
          </a>
        </div>
        <hr />
        <div className="p-4 text-center">
          <a
            href="#!"
            className="text-blue-500 text-sm duration-200 hover:text-blue-400 dark:text-blue-300"
          >
            See all incoming activity
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
