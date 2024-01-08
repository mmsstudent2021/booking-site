import React from "react";
import ContactHeader from "../components/ContactHeader";

import FirstSection from "../components/FirstSection";
import FormInput from "../components/FormInput";
import Map from "../components/Map";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import ScrollToTopButton from "../components/home/ScrollToTopButtom";

const Contact = () => {
  return (
    <>
      <main className=" dark:bg-bgDarkModeColor">
        <ContactHeader />
        <FirstSection />
        <FormInput />
        <Map />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default Contact;
