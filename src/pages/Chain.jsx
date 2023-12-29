import React from "react";
import HotelChainNav from "../components/Chain/HotelChainNav";
import Banner from "../components/Chain/Banner";
import Offer from "../components/Chain/Offer";
import About from "../components/Chain/About";
import Nearby from "../components/Chain/Nearby";
import Service from "../components/Chain/Service";
import Action from "../components/Chain/Action";

const Chain = () => {
  return (
    <div>
      <HotelChainNav />
      <Banner />
      <Offer />
      <About />
      <Nearby />
      <Service />
      <Action />
    </div>
  );
};

export default Chain;
