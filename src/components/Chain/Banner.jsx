import React, { useRef } from "react";

const Banner = () => {
  return (
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
      className="relative group lg:px-[70px] px-[20px] py-[8px]"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-[400px] lg:h-[680px] rounded-2xl">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide ">
            <div className="relative self-center text-4xl transition duration-700 h-full">
              <img
                src="./chain1.jpg"
                className="-z-20 w-full h-[400px] lg:h-[680px] object-left-top object-cover rounded-2xl"
              />
              <div className=" bg-black z-10 absolute left-0 top-0 w-full h-full opacity-30"></div>

              <div className="absolute z-20 top-1/2 -translate-y-1/2 left-[6%] flex flex-col gap-1 max-w-[600px]">
                <h6 className="font-heading font-medium text-base text-white">
                  💖 Fall in love with the city
                </h6>
                <ye-h1 className="text-white">Modern Luxury In Manhattan</ye-h1>
                <a
                  href="#"
                  className="text-white bg-beautifulBlue hover:bg-hoverBgBeautifulBlue px-3 py-2 self-start text-base font-body font-bold tracking-[0.5px] border border-beautifulBlue hover:border-hoverBorderBeautifulBlue dark:bg-darkModeBlue dark:hover:bg-hoverDarkModeBlue dark:border-darkModeBlue dark:hover:border-hoverDarkModeBlue rounded-lg"
                >
                  Reserve Today
                </a>
              </div>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="relative w-full text-4xl transition duration-700">
              <iframe
                className="w-full h-[400px] lg:h-[680px] rounded-2xl bg-center "
                src="https://www.youtube.com/embed/j56YlCXuPFU?si=ZCsbRdHl4KRi0-2h&autoplay=1&loop=1&mute=1&playlist=j56YlCXuPFU"
                title="Looping Video"
                border={0}
                allowFullScreen
              />
              <div className="bg-black z-10 absolute left-0 top-0 w-full h-full opacity-30"></div>
              <div className="absolute top-0 z-20 flex flex-col items-center justify-center w-full h-full">
                <div className="xl:px-[220px] lg:px-[50px] sm:px-[80px] px-[40px] flex flex-col justify-center gap-4">
                  <div className="text-center line-clamp-1 sm:line-clamp-none">
                    <ye-h1>Taking luxury hospitality to new heights</ye-h1>
                  </div>
                  <a
                    href="#"
                    className="text-white self-center bg-headingColor hover:opacity-85 px-4 py-2 text-base font-body font-bold tracking-[0.5px] border border-headingColor hover:bg-graysome hover:border-graysome duration-500 rounded-lg"
                  >
                    Take Me There
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute top-1/2 lg:left-16 opacity-0 group-hover:lg:left-20 group-hover:opacity-100 duration-500 sm:left-5 group-hover:sm:left-10 left-4 group-hover:left-8 bg-opacity-40 z-40 -translate-y-1/2 inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-[46px] bg-black text-white rounded-full backdrop-blur-[5px]"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="w-4 h-4 stroke-1"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute top-1/2 lg:right-16 opacity-0 group-hover:lg:right-20 group-hover:opacity-100 duration-500 sm:right-5 group-hover:sm:right-10 right-4 group-hover:right-8 -translate-y-1/2 inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-[46px] bg-black bg-opacity-40 text-white rounded-full backdrop-blur-[5px]"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
