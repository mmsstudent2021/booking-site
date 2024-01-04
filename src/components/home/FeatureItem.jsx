import React from "react";
import { FaStar } from "react-icons/fa6";
import { BsGeoAlt } from "react-icons/bs";

const FeatureItem = ({feature: {img, location, title, price, rating}}) => {
  return (
    <div className="relative group col-span-4 md:col-span-2 lg:col-span-1">
      <div className="rounded-2xl overflow-hidden relative">
        <img
          src={`./${img}`}
          className="w-full duration-500 group-hover:scale-[1.03]"
          alt=""
        />
        <span className="inline-flex items-center gap-x-1 py-0.5 px-2.5 bg-dark text-white rounded-full absolute bottom-4 left-4">
          <BsGeoAlt />
          {location}
        </span>
      </div>
      <div className="">
        <div className="px-2 py-4">
          <a
            href="#!"
            className="font-heading font-bold duration-500 hover:text-blue-500 stretched-link md:text-lg dark:text-gray-100 dark:hover:text-blue-300"
          >
            {title}
          </a>
          <div className="flex justify-between items-center text-sm md:text-base">
            <span className="block font-bold text-emerald-500">
              ${price} <span className="font-normal">/starting at</span>
            </span>
            <p className="flex gap-x-1 items-center font-bold dark:text-gray-100">
              {rating} <FaStar className="text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
