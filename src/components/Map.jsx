import React from "react";

const Map = () => {
  return (
    <section className="container my-16">
      <div >
        <iframe
          className="w-full h-[300px] grayscale rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
          aria-hidden="false"
          tabIndex={0}
        />
        
      </div>
    </section>
  );
};

export default Map;
