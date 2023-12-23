import React from "react";

const HotelChainNav = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <a href="#">
        <img
          className="h-[36px] md:h-[60px]"
          src="../src/img/logo-hotel.svg"
          alt=""
        />
      </a>
      <div className="flex items-center gap-3">
        <div className="h-[22px] w-[22px] relative">
          <div className="w-full h-[2px] bg-headingColor"></div>
          <div className="w-full h-[2px] bg-headingColor absolute top-2"></div>
          <div className="w-full h-[2px] bg-headingColor absolute top-4"></div>
        </div>

        <a
          href="#"
          className="font-body bg-beautifulBlue border-beautifulBlue border text-white font-bold text-[13px] tracking-widest px-3 py-[6px] rounded-md flex gap-1 items-center"
        >
          <span>Book a stay</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default HotelChainNav;
