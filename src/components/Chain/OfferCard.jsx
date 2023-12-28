import React from "react";

const OfferCard = ({ card: { id, img, heading, para } }) => {
  return (
    <div className="relative flex justify-center h-[420px] mx-auto rounded-xl">
      <img
        className="w-[90%] h-[256px] rounded-xl object-cover -z-10"
        src={img}
      />
      <div className="absolute z-10 top-0 translate-y-full mt-[64px] flex justify-center items-center flex-col w-[80%] py-4 rounded-lg gap-1 bg-white shadow-lg">
        <h4 className="text-base font-bold font-heading text-center">
          {heading}
        </h4>
        <p className="text-sm text-bodyColor">{para}</p>
        <button className="mt-2 bg-headingColor text-white font-bold tracking-widest text-sm px-3 py-2 rounded-md">
          View Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
