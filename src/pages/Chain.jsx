import React from "react";
import HotelChainNav from "../components/Chain/HotelChainNav";
import Banner from "../components/Chain/Banner";
import Offer from "../components/Chain/Offer";
import About from "../components/Chain/About";
import Nearby from "../components/Chain/Nearby";

const Chain = () => {
  return (
    <div>
      <HotelChainNav />
      <Banner />
      <Offer />
      <About />
      <Nearby />
    </div>
  );
};

export default Chain;
