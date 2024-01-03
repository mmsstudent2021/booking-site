import React from "react";

const NearByItem = ({nearby:{img, title, drivingTime}}) => {
  return (
    <div className="col-span-4 md:col-span-3 lg:col-span-2">
      <div className="relative text-center">
        <img
          src={`./${img}`}
          className="w-full rounded-full mb-2 md:mb-3"
          alt=""
        />
        <a
          href=""
          className="inline-block font-heading font-bold stretched-link mb-1 leading-5 duration-200 md:mb-2 md:text-xl hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300"
        >
          {title}
        </a>
        <p className="text-gray-500 dark:text-gray-400">{drivingTime}</p>
      </div>
    </div>
  );
};

export default NearByItem;
