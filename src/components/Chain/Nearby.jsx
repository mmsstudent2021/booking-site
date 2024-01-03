import React from "react";
import NearbyCard from "./NearbyCard";

const Nearby = () => {
  const nearByCardData = [
    {
      id: 1,
      img: "../../../src/img/c1.jpg",
      heading: "San Francisco",
    },
    {
      id: 2,
      img: "../../../src/img/c2.jpg",
      heading: "Los Angeles",
    },
    {
      id: 3,
      img: "../../../src/img/c3.jpg",
      heading: "Miami",
    },
    {
      id: 4,
      img: "../../../src/img/c4.jpg",
      heading: "Sanjosh",
    },
    {
      id: 5,
      img: "../../../src/img/c5.jpg",
      heading: "New York",
    },
    {
      id: 6,
      img: "../../../src/img/c6.jpg",
      heading: "North Justen",
    },
    {
      id: 7,
      img: "../../../src/img/c7.jpg",
      heading: "Rio",
    },
    {
      id: 8,
      img: "../../../src/img/c8.jpg",
      heading: "Las Vegas",
    },
    {
      id: 9,
      img: "../../../src/img/c9.jpg",
      heading: "Texas",
    },
    {
      id: 10,
      img: "../../../src/img/c10.jpg",
      heading: "Chicago",
    },
    {
      id: 11,
      img: "../../../src/img/c11.jpg",
      heading: "New Keagan",
    },
    {
      id: 12,
      img: "../../../src/img/c12.jpg",
      heading: "Oslo",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="pt-14 lg:pt-12">
        <div className="text-center mb-[25px]">
          <ye-h2>Explore Nearby</ye-h2>
        </div>

        <div className="grid grid-cols-12 gap-8 justify-center md:gap-12 lg:gap-14">
          {nearByCardData.map((card) => (
            <NearbyCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nearby;
