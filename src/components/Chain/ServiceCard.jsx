import React from "react";

const ServiceCard = ({ service: { id, img, heading6, heading4 } }) => {
  return (
    <div className="grid grid-cols-12 justify-center gap-6 items-center bg-someGray rounded-2xl px-7 py-6">
      <div className="col-span-12 md:col-span-6">
        <img src={img} className="rounded-2xl w-full max-h-full" />
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="group">
          <div className="mb-4">
            <ye-h6>{heading6}</ye-h6>
          </div>
          <div className="mb-4">
            <ye-h4>
              <a
                href="#"
                className="group-hover:text-beautifulBlue duration-500"
              >
                {heading4}
              </a>
            </ye-h4>
          </div>
          <a
            className="mb-[6px] text-beautifulBlue font-medium tracking-wide flex gap-1 items-center"
            href="#"
          >
            Explore Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
