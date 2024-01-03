import React from "react";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import BestDeal from "../components/home/BestDeal";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Clients from "../components/home/Clients";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <BestDeal />
      <About />
      <Feature />
      <Clients />
    </>
  );
};

export default Home;
