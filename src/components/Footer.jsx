import React from "react";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import {
  FaCar,
  FaEarthAmericas,
  FaFacebookF,
  FaHotel,
  FaInstagram,
  FaLinkedinIn,
  FaPlane,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#000]">
      <div className="container py-12 pb-5 text-gray-400 font-medium">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-y-0 mb-8 md:mb-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="md:w-2/3 lg:w-4/5">
              <img
                src="./logo-light.svg"
                className="h-10 mb-5 lg:mb-3"
                alt=""
              />
              <p className="mb-5">
                Departure defective arranging rapturous did believe him all had
                supported.
              </p>
              <div className="flex flex-col items-start gap-y-2">
                <a
                  href="tel:+1234 568 963"
                  className="inline-flex gap-x-2 items-center duration-300 hover:text-blue-500"
                >
                  <BsTelephone />
                  +1234 568 963
                </a>
                <a
                  href="mailto:example@gmail.com"
                  className="inline-flex gap-x-2 items-center duration-300 hover:text-blue-500"
                >
                  <BsEnvelope />
                  example@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="">
              <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
                Page
              </h4>
              <div className="flex flex-col items-start gap-y-2">
                <a href="#!" className="duration-300 hover:text-blue-500">
                  About us
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Contact us
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  News and Blog
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Meet a Team
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="">
              <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
                Link
              </h4>
              <div className="flex flex-col items-start gap-y-2">
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Sign up
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Sign in
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Privacy Policy
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Terms
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Cookie
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Support
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="">
              <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
                Global Site
              </h4>
              <div className="flex flex-col items-start gap-y-2">
                <a href="#!" className="duration-300 hover:text-blue-500">
                  India
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  California
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Indonesia
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Canada
                </a>
                <a href="#!" className="duration-300 hover:text-blue-500">
                  Malaysia
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="">
              <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
                Booking
              </h4>
              <div className="flex flex-col items-start gap-y-2">
                <a
                  className="duration-300 hover:text-blue-500 inline-flex items-center gap-x-2"
                  href="#"
                >
                  <FaHotel /> Hotel
                </a>
                <a
                  className="duration-300 hover:text-blue-500 inline-flex items-center gap-x-2"
                  href="#"
                >
                  <FaPlane /> Flight
                </a>
                <a
                  className="duration-300 hover:text-blue-500 inline-flex items-center gap-x-2"
                  href="#"
                >
                  <FaEarthAmericas /> Tour
                </a>
                <a
                  className="duration-300 hover:text-blue-500 inline-flex items-center gap-x-2"
                  href="#"
                >
                  <FaCar /> Cab
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-8 md:mb-10">
          <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
            Top Links
          </h4>
          <div className="flex flex-wrap gap-3 gap-y-2">
            <a href="#!" className="duration-300 hover:text-blue-500">
              Flights
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Hotels
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Tours
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Cabs
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              About
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Contact us
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Blogs
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Services
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Detail page
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Services
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Policy
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Testimonials
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Newsletters
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Podcasts
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Protests
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              NewsCyber
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Education
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Sports
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Tech and Auto
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Opinion
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Share Market
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <h4 className="text-gray-100 text-xl font-heading font-bold mb-5">
              Payment & Security
            </h4>
            <div className="flex gap-x-3">
              <a href="" className=" duration-300 hover:scale-105">
                <img src="./paypal.svg" className="h-7" alt="" />
              </a>
              <a href="" className=" duration-300 hover:scale-105">
                <img src="./visa.svg" className="h-7" alt="" />
              </a>
              <a href="" className=" duration-300 hover:scale-105">
                <img src="./mastercard.svg" className="h-7" alt="" />
              </a>
              <a href="" className=" duration-300 hover:scale-105">
                <img src="./expresscard.svg" className="h-7" alt="" />
              </a>
            </div>
          </div>
          <div className="">
            <h4 className="text-gray-100 text-xl font-heading font-bold text-end mb-5">
              Follow us on
            </h4>
            <div className="flex gap-x-3">
              <a href="" className="">
                <span className="inline-block p-2 bg-blue-500 text-white rounded duration-300 hover:bg-blue-600 hover:scale-105">
                  <FaFacebookF />
                </span>
              </a>
              <a href="" className="">
                <span className="inline-block p-2 bg-pink-500 text-white rounded duration-300 hover:bg-pink-600 hover:scale-105">
                  <FaInstagram />
                </span>
              </a>
              <a href="" className="">
                <span className="inline-block p-2 bg-sky-500 text-white rounded duration-300 hover:bg-sky-600 hover:scale-105">
                  <FaTwitter />
                </span>
              </a>
              <a href="" className="">
                <span className="inline-block p-2 bg-cyan-500 text-white rounded duration-300 hover:bg-cyan-600 hover:scale-105">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 my-5"></div>
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 justify-between">
          <p className="text-center md:text-start">Copyrights ©2023 Booking. Build by Webestica.</p>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-y-2 md:justify-end items-center gap-x-6">
            <a href="#!" className="duration-300 hover:text-blue-500">
              Privacy policy
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Terms and conditions
            </a>
            <a href="#!" className="duration-300 hover:text-blue-500">
              Refund policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
