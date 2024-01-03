import React from "react";

const NearbyCard = ({ card: { id, img, heading } }) => {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-2 group">
      <img src={img} className="max-w-full h-auto rounded-full" />
      <h5 className="text-center mt-4 group-hover:text-beautifulBlue duration-300">
        <a href="#">{heading}</a>
      </h5>
    </div>
  );
};

export default NearbyCard;
