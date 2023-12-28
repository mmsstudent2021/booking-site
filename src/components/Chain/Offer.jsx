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
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="pt-16 flex flex-col gap-6 items-center">
        <h1 className="font-heading text-4xl font-bold"> Special Offers </h1>

        {/* <div className="container flex justify-center gap-6">
          {cards.map((card) => (
            <OfferCard key={card.id} card={card} />
          ))}
        </div> */}

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {cards.map((card) => (
                <li key={card.id} className="glide__slide">
                  <OfferCard card={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
