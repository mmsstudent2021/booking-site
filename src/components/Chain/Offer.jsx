import OfferCard from "./OfferCard";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const Offer = () => {
  const cards = [
    {
      id: 1,
      img: "../../../src/img/card1.jpg",
      heading: "Elevate Your Stay",
      para: "Valid through Dec 2022",
    },
    {
      id: 2,
      img: "../../../src/img/card2.jpg",
      heading: "Spa Package Offer",
      para: "Valid through Feb 2023",
    },
    {
      id: 3,
      img: "../../../src/img/card3.jpg",
      heading: "Past Holder Package",
      para: "Valid through Feb 2023",
    },
    {
      id: 4,
      img: "../../../src/img/card4.jpg",
      heading: "2023 Golf Tournament Package",
      para: "Valid through Jan 2021",
    },
  ];

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      breakpoints: {
        767: {
          perView: 1,
        },
        1024: {
          perView: 2,
        },
      },
      autoplay: 3000,
      gap: 30,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="pt-14 pb-12 flex flex-col gap-6 items-center">
        <div className="mb-1">
          <ye-h3> Special Offers </ye-h3>
        </div>

        {/* Glide */}
        <div className="group glide overflow-x-hidden">
          <div className="glide__track overflow-x-hidden" data-glide-el="track">
            <ul className="glide__slides overflow-x-hidden">
              {cards.map((card) => (
                <li key={card.id} className="glide__slide overflow-x-hidden">
                  <OfferCard card={card} />
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
  );
};

export default Offer;
