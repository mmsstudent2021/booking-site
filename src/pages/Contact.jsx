import React from "react";
import ContactHeader from "../components/ContactHeader";

import FirstSection from "../components/FirstSection";
import FormInput from "../components/FormInput";
import Map from "../components/Map";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";


const Contact = () => {
  return (
    <>
      <main className=" dark:bg-black-700">
        
        <HeaderSection/>
        <ContactHeader />
        <FirstSection />
        <FormInput />
        <Map />
        
        <Footer/>
        
      </main>
      
    </>
  );
};

export default Contact;
