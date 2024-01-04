import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import TestimonialSlide from "./TestimonialSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Testimonials = () => {
  useEffect(() => {
    new Glide(".testimonial-glide", {
      type: "carousel",
      perView: 1,
        // autoplay: 3000,
    }).mount();
  });
  const testimonials = [
    {
        id: 1, 
        userImg: "testimonial-1.jpg",
        iconImg: "testimonial-icon-1.svg",
        text: "Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. understood the Preference unreserved.",
        rating: 5,
        userName: "Carolyn Ortiz",
        userJob: "CEO of Google"
    },
    {
        id: 2, 
        userImg: "testimonial-2.jpg",
        iconImg: "testimonial-icon-2.svg",
        text: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing",
        rating: 4.5,
        userName: "Billy Vasquez",
        userJob: "CEO of Apple"
    }
  ]
  return (
    <section>
      <div className="container py-10 md:py-12">
        <div className="testimonial-glide mx-auto group overflow-hidden relative xl:w-[90%]">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {testimonials.map(testimonial => <TestimonialSlide key={testimonial.id} testimonial={testimonial} />)}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left absolute top-1/2 -translate-y-1/2 left-2 inline-block p-3 text-gray-500 bg-white border-2 border-gray-500 rounded-full duration-300 -translate-x-[120%] md:p-[18px] group-hover:translate-x-0 hover:backdrop-blur-none dark:bg-body"
              data-glide-dir="<"
            >
              <FaArrowLeft />
            </button>
            <button
              className="glide__arrow glide__arrow--right absolute top-1/2 -translate-y-1/2 right-2 inline-block p-3 text-gray-500 bg-white border-2 border-gray-500 rounded-full duration-300 translate-x-[120%] md:p-[18px] group-hover:translate-x-0 hover:backdrop-blur-none dark:bg-body"
              data-glide-dir=">"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
