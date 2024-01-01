import React from "react";
import HotelChainNav from "../components/Chain/HotelChainNav";
import Banner from "../components/Chain/Banner";
import Offer from "../components/Chain/Offer";
import About from "../components/Chain/About";
import Nearby from "../components/Chain/Nearby";
import Service from "../components/Chain/Service";
import Action from "../components/Chain/Action";
import Gallery from "../components/Chain/Gallery";
import Footer from "../components/Chain/Footer";

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
      <Gallery />
      <Footer />
    </div>
  );
};

export default Chain;
