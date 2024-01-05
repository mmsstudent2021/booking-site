import Glide from "@glidejs/glide";
import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    const glide = new Glide(".glide2", {
      type: "carousel",
      startAt: 0,
      perView: 6,
      breakpoints: {
        767: {
          perView: 2,
        },
        1024: {
          perView: 4,
        },
      },
      autoplay: 3000,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  const images = [
    {
      id: 1,
      img: "./g1.jpg",
    },
    {
      id: 2,
      img: "./g1.5.jpg",
    },
    {
      id: 3,
      img: "./g2.jpg",
    },
    {
      id: 4,
      img: "./g3.jpg",
    },
    {
      id: 5,
      img: "./g4.jpg",
    },
    {
      id: 6,
      img: "./g5.jpg",
    },
    {
      id: 7,
      img: "./g6.jpg",
    },
    {
      id: 8,
      img: "./g7.jpg",
    },
  ];

  return (
    <div className="pt-14 pb-11">
      <div className="text-center mb-[50px]">
        <ye-h2>Our Hotel Precious Moments</ye-h2>
      </div>

      <div className="glide2 group relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex items-end">
            {images.map((image) => (
              <li key={image.id} className="glide__slide px-[10px]">
                <img
                  src={image.img}
                  className="rounded-2xl max-w-full h-auto"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left border-none rounded-full bg-black-900 bg-opacity-40 p-4 opacity-0 group-hover:opacity-100 duration-500 backdrop-blur-[5px]"
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
            className="glide__arrow glide__arrow--right bg-black-900 bg-opacity-40 p-4 border-none rounded-full opacity-0 group-hover:opacity-100 duration-500 backdrop-blur-[5px]"
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
  );
};

export default Gallery;
