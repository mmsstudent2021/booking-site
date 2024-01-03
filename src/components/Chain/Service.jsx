import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import ServiceCard from "./ServiceCard";

const Service = () => {
  useEffect(() => {
    const glide1 = new Glide(".glide1", {
      type: "slider",
      startAt: 0,
      perView: 1,
      autoplay: 3000,
    });

    glide1.mount();

    return () => {
      glide1.destroy();
    };
  }, []);

  const serviceData = [
    {
      id: 1,
      img: "./s1.jpg",
      heading6: "Royal Stay",
      heading4: "Booking Grad Palace Japan",
    },
    {
      id: 2,
      img: "./s2.jpg",
      heading6: "Adventure Stay",
      heading4: "Gold & Spa Resort in New York",
    },
    {
      id: 3,
      img: "./s3.jpg",
      heading6: "Honeymoon Sweets",
      heading4: "Maldives Sunshine Hotel",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="pb-11 pt-16 lg:pt-14 lg:pb-12">
        <div className="group grid grid-cols-12 items-center gap-8 mt-10">
          <div className="col-span-12 lg:col-span-6 grid grid-cols-12">
            <div className="col-span-12 mb-[35px]">
              <div className="mb-2">
                <ye-h2>We Provide Our Best Facilities For You</ye-h2>
              </div>
              <p className="text-bodyColor dark:text-grayPara mb-4">
                Book your hotel with us and don't forget to grab an awesome
                hotel deal to save massive on your stay.
              </p>
              <a
                href="#"
                className="bg-headingColor block w-fit text-base hover:bg-graysome hover:border-graysome duration-300 text-white px-4 py-2 rounded-lg tracking-wider font-bold"
              >
                Contact Us
              </a>
            </div>
            <div className="col-span-12 mb-2 md:mb-0 md:col-span-6">
              <ul className="flex flex-col gap-2 font-medium">
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        className="w-6 text-beautifulBlue dark:text-darkModeBlue fill-beautifulBlue dark:fill-darkModeBlue"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                      >
                        <rect width={256} height={256} fill="none" />
                        <circle cx={128} cy={204} r={16} />
                        <path
                          d="M232,93.19a164,164,0,0,0-208,0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={24}
                        />
                        <path
                          d="M200,129a116,116,0,0,0-144,0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={24}
                        />
                        <path
                          d="M168,165a68,68,0,0,0-80,0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={24}
                        />
                      </svg>
                      Free Wifi
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        viewBox="0 0 576 512"
                        className="fill-beautifulBlue dark:fill-darkModeBlue w-6"
                      >
                        <path
                          opacity={1}
                          d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                        />
                      </svg>
                      Swimming Pool
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        className="fill-beautifulBlue dark:fill-darkModeBlue w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        viewBox="0 0 512 512"
                      >
                        <path
                          opacity={1}
                          d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160V480c0 17.7 14.3 32 32 32s32-14.3 32-32V178.6L256 68.9 448 178.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280V400h16v88c0 13.3 10.7 24 24 24s24-10.7 24-24V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H246.2c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                        />
                      </svg>
                      Private Workshop
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items center">
                      <svg
                        className="fill-beautifulBlue dark:fill-darkModeBlue w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        width={14}
                        viewBox="0 0 448 512"
                      >
                        <path
                          opacity={1}
                          fill=""
                          d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                        />
                      </svg>
                      Breakfast
                    </div>
                  </ye-h6>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <ul className="flex flex-col gap-2 font-medium">
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        className="fill-beautifulBlue dark:fill-darkModeBlue w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        width={14}
                        viewBox="0 0 448 512"
                      >
                        <path
                          opacity={1}
                          d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                        />
                      </svg>
                      Free Electricity
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        viewBox="0 0 640 512"
                        className="w-6 fill-beautifulBlue dark:fill-darkModeBlue"
                      >
                        <path
                          opacity={1}
                          d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
                        />
                      </svg>
                      Gym Space
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        className="fill-beautifulBlue w-6 dark:fill-darkModeBlue"
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        width={18}
                        viewBox="0 0 576 512"
                      >
                        <path
                          opacity={1}
                          d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"
                        />
                      </svg>
                      Spa
                    </div>
                  </ye-h6>
                </li>
                <li>
                  <ye-h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        className="fill-beautifulBlue w-6 dark:fill-darkModeBlue"
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        width={14}
                        viewBox="0 0 448 512"
                      >
                        <path
                          opacity={1}
                          d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                        />
                      </svg>
                      Other Services
                    </div>
                  </ye-h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 rounded-2xl">
            {/* Glide */}
            <div className="glide1 relative">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {serviceData.map((service) => (
                    <li key={service.id} className="glide__slide">
                      <ServiceCard service={service} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Controls */}
              <div className="glide__arrows" data-glide-el="controls">
                <button
                  className="glide__arrow glide__arrow--left border-none rounded-full bg-black bg-opacity-40 p-4 opacity-0 group-hover:opacity-100 duration-500 backdrop-blur-[5px]"
                  data-glide-dir="<"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  className="glide__arrow glide__arrow--right bg-black bg-opacity-40 p-4 border-none rounded-full opacity-0 group-hover:opacity-100 duration-500 backdrop-blur-[5px]"
                  data-glide-dir=">"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
