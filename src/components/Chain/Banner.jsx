import React from "react";

const Banner = () => {
  return (
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
      className="relative lg:px-[70px] px-[20px] py-[8px]"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-[400px] lg:h-[680px] rounded-2xl">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex justify-center">
              <div className="relative self-center text-4xl transition duration-700 h-full">
                <img
                  src="../../../src/img/chain1.jpg"
                  className="-z-20 w-full h-[400px] lg:h-full object-left-top object-cover rounded-2xl"
                />

                <div className="absolute top-1/2 -translate-y-1/2 left-[6%] flex flex-col gap-2 max-w-[600px]">
                  <h6 className="font-heading font-medium text-base text-white">
                    Fall in love with the city
                  </h6>
                  <h1 className="text-white font-heading font-bold text-[34px] md:text-[44px] lg:text-[56px] leading-snug ">
                    Modern Luxury In Manhattan
                  </h1>
                  <a
                    href="#"
                    className="text-white bg-beautifulBlue hover:bg-hoverBgBeautifulBlue px-3 py-2 self-start text-base font-body font-bold tracking-[0.5px] border border-beautifulBlue hover:border-hoverBorderBeautifulBlue rounded-lg"
                  >
                    Reserve Today
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center">
              <div className="relative w-full self-center text-4xl transition duration-700">
                <iframe
                  className="w-full h-[400px] lg:h-[680px] rounded-2xl bg-center pointer-events-none"
                  src="https://www.youtube.com/embed/j56YlCXuPFU?si=ZCsbRdHl4KRi0-2h&autoplay=1&mute=1&loop=1"
                  title="YouTube video player"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-[46px] bg-black text-white rounded-full"
        >
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
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-[46px] bg-black text-white rounded-full"
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
