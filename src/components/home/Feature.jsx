import React from "react";
import FeatureItem from "./FeatureItem";

const Feature = () => {
  const features = [
    {
      id: 1,
      img: "feature-01.jpg",
      location: "New York",
      title: "Baga Comfort",
      price: "455",
      rating: "4.5",
    },
    {
      id: 2,
      img: "feature-02.jpg",
      location: "California",
      title: "New Apollo Hotel",
      price: "585",
      rating: "4.8",
    },
    {
      id: 3,
      img: "feature-03.jpg",
      location: "Los Angeles",
      title: "New Age Hotel",
      price: "385",
      rating: "4.6",
    },
    {
      id: 4,
      img: "feature-04.jpg",
      location: "Chicago",
      title: "Helios Beach Resort",
      price: "665",
      rating: "4.8",
    },
  ];
  return (
    <section>
      <div className="container py-8 md:py-10">
        <div className="">
          <h2 className="text-headingColor font-bold font-heading text-2xl leading-8 mb-5 text-center md:text-5xl md:leading-[3.5rem] md:mb-8 xl:text-5xl xl:leading-[4rem] dark:text-gray-100">
            Featured Hotels
          </h2>
          <div className="grid grid-cols-4 gap-y-5 md:gap-10 lg:gap-y-0 lg:gap-x-5 xl:gap-x-8">
            {features.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
