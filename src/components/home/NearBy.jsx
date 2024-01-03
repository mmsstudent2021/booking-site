import React from "react";
import NearByItem from "./NearByItem";

const NearBy = () => {
    const nearbys = [
        {
            id: 1,
            img: "nearby-01.jpg",
            title: "San Francisco",
            drivingTime: "13 min drive"
        },
        {
            id: 2,
            img: "nearby-02.jpg",
            title: "Los Angeles",
            drivingTime: "25 min drive"
        },
        {
            id: 3,
            img: "nearby-03.jpg",
            title: "Miami",
            drivingTime: "45 min drive"
        },
        {
            id: 4,
            img: "nearby-04.jpg",
            title: "Sanjosh",
            drivingTime: "55 min drive"
        },
        {
            id: 5,
            img: "nearby-05.jpg",
            title: "New York",
            drivingTime: "1 hour drive"
        },
        {
            id: 6,
            img: "nearby-06.jpg",
            title: "North Justen",
            drivingTime: "2 hour drive"
        },
        {
            id: 7,
            img: "nearby-07.jpg",
            title: "Rio",
            drivingTime: "20 min drive"
        },
        {
            id: 8,
            img: "nearby-08.jpg",
            title: "Las Vegas",
            drivingTime: "3 hour drive"
        },
        {
            id: 9,
            img: "nearby-09.jpg",
            title: "Texas            ",
            drivingTime: "13 min drive"
        },
        {
            id: 10,
            img: "nearby-10.jpg",
            title: "Chicago",
            drivingTime: "13 min drive"
        },
        {
            id: 11,
            img: "nearby-11.jpg",
            title: "New Keagan",
            drivingTime: "35 min drive"
        },
        {
            id: 12,
            img: "nearby-01.jpg",
            title: "Oslo",
            drivingTime: "1 hour 13 min drive"
        },
    ]
  return (
    <section>
      <div className="container py-8 md:py-10">
        <div className="">
          <h2 className="text-headingColor font-bold font-heading text-2xl leading-8 mb-8 text-center md:text-5xl md:leading-[3.5rem] md:mb-10 xl:text-5xl xl:leading-[4rem] dark:text-gray-100">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-12 gap-5 md:gap-10 lg:gap-x-12 lg:gap-y-10 2xl:gap-x-16">
            {nearbys.map(nearby => <NearByItem key={nearby.id} nearby={nearby} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearBy;
