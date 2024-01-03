import React from "react";
import NearbyCard from "./NearbyCard";

const Nearby = () => {
  const nearByCardData = [
    {
      id: 1,
      img: "./c1.jpg",
      heading: "San Francisco",
    },
    {
      id: 2,
      img: "./c2.jpg",
      heading: "Los Angeles",
    },
    {
      id: 3,
      img: "./c3.jpg",
      heading: "Miami",
    },
    {
      id: 4,
      img: "./c4.jpg",
      heading: "Sanjosh",
    },
    {
      id: 5,
      img: "./c5.jpg",
      heading: "New York",
    },
    {
      id: 6,
      img: "./c6.jpg",
      heading: "North Justen",
    },
    {
      id: 7,
      img: "./c7.jpg",
      heading: "Rio",
    },
    {
      id: 8,
      img: "./c8.jpg",
      heading: "Las Vegas",
    },
    {
      id: 9,
      img: "./c9.jpg",
      heading: "Texas",
    },
    {
      id: 10,
      img: "./c10.jpg",
      heading: "Chicago",
    },
    {
      id: 11,
      img: "./c11.jpg",
      heading: "New Keagan",
    },
    {
      id: 12,
      img: "./c12.jpg",
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
