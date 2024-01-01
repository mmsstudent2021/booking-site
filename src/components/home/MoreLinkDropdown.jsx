import React from "react";
import { FaBasketball, FaCloudArrowDown, FaEllipsis, FaPuzzlePiece, FaToggleOff } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";

const MoreLinkDropdown = () => {
  return (
    <div className="flex flex-col gap-5 [--trigger:hover] xl:flex-row xl:items-center xl:justify-start">
      <div className="hs-dropdown [--strategy:static] xl:[--strategy:fixed] [--adaptive:none]">
        <button type="button" className="dropdown-btn ">
          <FaEllipsis className="w-4 h-4" />
        </button>
        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-60 z-10 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 hidden">
          <a className="nav-link sub-nav-link" href="#">
            <FaBasketball className="text-yellow-500" />
            Sport
          </a>
          <a className="nav-link sub-nav-link" href="#">
            <BsCardText className="text-red-500" />
            Documentation
          </a>
          <div className="border-t border-gray-300 my-2"></div>
          <a className="nav-link sub-nav-link" href="#">
            <FaToggleOff className="text-teal-500" />
            RTL Demo
          </a>
          <a className="nav-link sub-nav-link" href="#">
            <FaCloudArrowDown className="text-green-500" />
            Buy Booking
          </a>
          <div className="border-t border-gray-300 my-2"></div>
          <a className="nav-link sub-nav-link" href="#">
            <FaPuzzlePiece className="text-orange-500" />
            Components
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreLinkDropdown;
