import React from "react";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import BestDeal from "../components/home/BestDeal";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import NearBy from "../components/home/NearBy";
import Download from "../components/home/Download";
import Footer from "../components/home/Footer";
import ScrollToTopButton from "../components/home/ScrollToTopButtom";
import MobileNavBar from "../components/home/MobileNavBar";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <BestDeal />
      <About />
      <Feature />
      <Clients />
      <Testimonials />
      <NearBy />
      <Download />
      <Footer />
      <ScrollToTopButton />
      <MobileNavBar />
    </>
  );
};

export default Home;
