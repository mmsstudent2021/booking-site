import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className="bg-headingColor text-white pt-5">
      <div className="container">
        <div className="flex flex-col gap-10 py-8">
          <div className="flex item-start justify-between gap-9">
            <div>
              <img
                className="h-[40px] mb-8"
                src="./public/logo-light.svg"
                alt=""
              />
              <div className="flex flex-col gap-3 ">
                <p className=" text-start max-w-xs pr-27 text-gray-300">
                  Departure defective arranging rapturous did believe him all
                  had supported.
                </p>
                <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                  +1234 568 963
                </a>
                <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                  example@gmail.com
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
              <div>
                <h3 className="text-xl font-bold font-heading mb-8">Page</h3>
                <div className=" flex flex-col gap-2">
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    About us
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Contact us
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    News and Blog
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Meet a Team
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-8">Link</h3>
                <div className=" flex flex-col gap-2">
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Sign up
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Sign in
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Terms
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Cookie
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Support
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-8">
                  Global Site
                </h3>
                <div className=" flex flex-col gap-2">
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    India
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    California
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Indonesia
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Canada
                  </a>
                  <a href="#" className="hover:text-beautifulBlue duration-200 text-gray-300">
                    Malaysia
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-8">Booking</h3>
                <div className=" flex flex-col gap-2 text-gray-300">
                  <a
                    href="#"
                    className="hover:text-beautifulBlue duration-200 flex items-center gap-2"
                  >
                    <FaHotel /> Hotel
                  </a>
                  <a
                    href="#"
                    className="hover:text-beautifulBlue duration-200 flex items-center gap-2 "
                  >
                    <span className="rotate-90 text-2xl">
                      <MdFlight />
                    </span>{" "}
                    Flight
                  </a>
                  <a
                    href="#"
                    className="hover:text-beautifulBlue duration-200 flex items-center gap-2"
                  >
                    <FaEarthAmericas /> Tour
                  </a>
                  <a
                    href="#"
                    className="hover:text-beautifulBlue duration-200 flex items-center gap-2"
                  >
                    <FaCar /> Cabs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-xl font-bold font-heading mb-8">Top Links</h3>
            <div className="flex item-center flex-wrap gap-3 text-gray-300 ">
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Flights
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Hotels
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Tours
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Cabs
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                About
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Contact us
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Blogs
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Services
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Detail page
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Services
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Policy
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Testimonials
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Newsletters
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Podcasts
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Protests
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                NewsCyber
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Education
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Sports
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Tech and Auto
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Opinion
              </a>
              <a href="#" className="hover:text-beautifulBlue duration-200">
                Share Market
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold font-heading">
                Payment & Security
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <a href="#header">
                  <img src="./public/paypal.svg" className="h-[30px]" alt="" />
                </a>
                <a href="#header">
                  <img src="./public/visa.svg" className="h-[30px]" alt="" />
                </a>
                <a href="#header">
                  <img
                    src="./public/mastercard.svg"
                    className="h-[30px]"
                    alt=""
                  />
                </a>
                <a href="#header">
                  <img
                    src="./public/expresscard.svg"
                    className="h-[30px]"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Follow us on</h3>
              <div className="flex items-center gap-1 mt-2">
                <a
                  href="#header"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border duration-200 border-transparent bg-blue-400 text-white hover:bg-blue-500 hover:text-blue-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#header"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-pink-600 duration-200 text-white  hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#header"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-400 text-white duration-200  hover:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#header"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-300 text-white duration-200  hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-700 text-xs font-light" />
        <div className="py-5 flex justify-between items-center text-gray-300">
          <p>
            Copyrights ©2023 Booking. Build by{" "}
            <a href="#" className="hover:text-beautifulBlue duration-200">
              Webestica
            </a>
            .
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-beautifulBlue duration-200">
              Privacy policy
            </a>
            <a href="#" className="hover:text-beautifulBlue duration-200">
              Terms and conditions
            </a>
            <a href="#" className="hover:text-beautifulBlue duration-200">
              Refund policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
