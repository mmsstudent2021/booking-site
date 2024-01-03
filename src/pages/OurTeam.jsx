import React from "react";
import CardSection from "../components/CardSection";
import OurTeamFirst from "../components/OurTeamFirst";
import Book from "../components/Book";
import ContactHeader from "../components/ContactHeader";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";

const OurTeam = () => {
  
  return (
    <>
      <div className="dark:bg-black-700">
      <HeaderSection/>
      <ContactHeader/>
      <OurTeamFirst/>
      <CardSection />
      <Book/>
      <Footer/>
      </div>
    </>
  );
};

export default OurTeam;
