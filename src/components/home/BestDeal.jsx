import React, { useEffect } from "react";
import "../../../node_modules/@glidejs/glide/dist/glide";
import BestDealGlideSlide from "./BestDealGlideSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BestDeal = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 20,
      perView: 3,
      autoplay: 3000,
      breakpoints: {
        1280: {
          perView: 2,
          gap: 20,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();
  });
  const glideSlides = [
    {
      id: 1,
      img: "bestdeal-1.jpg",
      title: "Daily 50 Lucky Winners get a Free Stay",
      text: "Valid till: 15 Nov",
    },
    {
      id: 2,
      img: "bestdeal-2.jpg",
      title: "Up to 60% OFF",
      text: "On Hotel Bookings Online",
    },
    {
      id: 3,
      img: "bestdeal-3.jpg",
      title: "Book & Enjoy",
      text: "20% Off on the best available room rate",
    },
    {
      id: 4,
      img: "bestdeal-4.jpg",
      title: "Hot Summer Nights!",
      text: "Up to 3 nights free",
    },
  ];
  return (
    <section>
      <div className="container py-5 md:py-10">
        <div className="glide relative overflow-hidden group">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {glideSlides.map((glideSlide) => (
                <BestDealGlideSlide key={glideSlide.id} glide={glideSlide} />
              ))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left absolute h-full flex items-center top-0 left-2 "
              data-glide-dir="<"
            >
              <span className="inline-block p-3 text-gray-100 bg-dark/30 backdrop-blur-sm rounded-full duration-300 -translate-x-[120%] md:p-[18px] group-hover:translate-x-0 hover:backdrop-blur-none dark:bg-white/30">
                <FaArrowLeft />
              </span>
            </button>
            <button
              className="glide__arrow glide__arrow--right absolute h-full flex items-center top-0 right-2 "
              data-glide-dir=">"
            >
              <span className="inline-block p-3 text-gray-100 bg-dark/30 backdrop-blur-sm rounded-full duration-300 translate-x-[120%] md:p-[18px] group-hover:translate-x-0 hover:backdrop-blur-none dark:bg-white/30">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
