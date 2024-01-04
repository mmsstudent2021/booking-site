import React from "react";

const OfferCard = ({ card: { id, img, heading, para } }) => {
  return (
    <div className="relative w-full max-h-full mb-[90px] md:max-h-[265px] lg:max-h-[261px] xl:max-h-[276px] rounded-2xl">
      <img className="w-full h-full rounded-2xl bg-cover" src={img} />
      <div className="absolute dark:bg-cardDarkModeColor left-0 right-0 mx-auto bottom-0 translate-y-1/2 z-10 flex justify-center items-center flex-col w-[80%] py-4 rounded-lg gap-1 bg-white shadow-lg">
        <div className="font-bold">
          <ye-h6>{heading}</ye-h6>
        </div>
        <p className="text-sm text-bodyColor dark:text-grayPara">{para}</p>
        <button className="mt-2 bg-headingColor hover:bg-graysome duration-300 text-white font-bold tracking-widest text-sm px-3 py-2 rounded-md">
          View Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
