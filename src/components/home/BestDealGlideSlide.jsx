import React from "react";

const BestDealGlideSlide = ({glide:{img, title, text}}) => {
  return (
    <li className="glide__slide relative py-1">
      <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-gray-300 dark:bg-dark dark:border-dark">
        <div className="">
          <img
            src={`./${img}`}
            className="w-full h-[150px] object-cover object-center"
            alt=""
          />
        </div>
        <div className="self-center p-4">
          <a href="" className="inline-block font-bold font-heading text-gray-900 mb-2 duration-200 stretched-link hover:text-blue-500 text-sm lg:text-base dark:hover:text-blue-300 dark:text-gray-100">
            {title}
          </a>
          <p className=" text-gray-500 text-sm lg:text-base dark:text-gray-400">{text}</p>
        </div>
      </div>
    </li>
  );
};

export default BestDealGlideSlide;
