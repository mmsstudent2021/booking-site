import React from "react";

const NearbyCard = ({ card: { id, img, heading } }) => {
  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-2 group">
      <img src={img} className="max-w-full h-auto rounded-full" />
      <div className="text-center mt-4 group-hover:text-beautifulBlue text-headingColor dark:text-white duration-300">
        <ye-h5>
          <a href="#">{heading}</a>
        </ye-h5>
      </div>
    </div>
  );
};

export default NearbyCard;
