import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = ({ img, name, job }) => {
  return (
    <div className="group">
      <div className="relative ">
        <div className=" overflow-hidden rounded-lg">
          <img
            src={`./${img}`}
            className="w-full duration-300  group-hover:scale-110 "
            alt=""
          />
        </div>
        <div className="px-2  rounded-md flex items-center gap-x-2 absolute text-base text-yellow-500 top-0 left-0 translate-x-3 translate-y-3 bg-white">
          <FaStar />
          <span className="text-sm text-headingColor">4.3</span>
        </div>
        <div className="absolute hidden group-hover:block bottom-0 bg-white rounded-md -translate-y-4 translate-x-4">
          <button className="py-3 px-4 text-blue-400 hover:bg-blue-100 duration-200 rounded-s-md">
            <a href="#">
              <FaFacebookF />
            </a>
          </button>
          <button className="py-3 px-4 text-pink-500 hover:bg-blue-100 duration-200">
            <a href="#">
              <FaInstagram />
            </a>
          </button>
          <button className="py-3 px-4 text-teal-500 hover:bg-blue-100 duration-200 rounded-e-md">
            <a href="#">
              <FaTwitter />
            </a>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h5 className="text-xl font-bold duration-200 hover:text-blue-400">
          <a href="#" className="dark:text-white">
            {name}
          </a>
        </h5>
        <p className="text-base mt-1 dark:text-gray-300 text-bodyColor">
          {job}
        </p>
      </div>
    </div>
  );
};

export default Card;
