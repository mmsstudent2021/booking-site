import React from "react";

const Book = () => {
  return (
    <section className="container">
      <div className="p-6 md:p-12 lg:p-12 bg-yellow-300 dark:bg-yellow-700 rounded-xl my-10">
        <div className=" lg:flex justify-between items-center ">
          <div className="max-w-2xl ">
            <div className="flex justify-between items-start gap-2 lg:gap-7">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-headingColor dark:text-white">
                Let's Enjoy Your Trip With Booking
              </h3>
              <img src="./public/plane.svg" className="h-[40px]" alt="" />
            </div>
            <p className="text-base lg:mr-4 mt-2 mb-2 font-body text-bodyColor dark:text-gray-300">
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
          </div>
          <button
            type="button"
            className="py-3 lg:px-4 px-6 inline-flex items-center gap-x-2 text-base lg:text-base font-semibold rounded-xl lg:rounded-lg border border-transparent bg-gray-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Book Your Destination
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;
