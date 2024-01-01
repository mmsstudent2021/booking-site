import React from "react";
import {
  FaBars,
  FaXmark,
  FaHotel,
  FaPlane,
  FaEarthAmericas,
  FaCar,
  FaEllipsis,
  FaAngleDown,
} from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import MoreLinkDropdown from "./MoreLinkDropdown";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <header className="relative flex flex-wrap xl:justify-start xl:flex-nowrap z-50 w-full bg-white py-3 xl:py-7 dark:bg-body-dark">
      <nav className="container" aria-label="Global">
        <div className="flex flex-wrap items-center justify-between relative">
          <a
            className="flex-none text-xl font-semibold dark:text-white md:mr-8 xl:mr-5"
            href="#"
          >
            <img
              src="./logo-dark.svg"
              className="h-7 xl:h-10 dark:hidden"
              alt=""
            />
            <img
              src="./logo-light.svg"
              className="h-7 xl:h-10 hidden dark:block"
              alt=""
            />
          </a>
          <button
            type="button"
            className="ms-auto md:ml-0 md:mr-auto xl:hidden hs-collapse-toggle inline-flex justify-center items-center gap-x-2 rounded-lg bg-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400"
            data-hs-collapse="#mainNavMenu"
            aria-controls="mainNavMenu"
            aria-label="Toggle navigation"
          >
            <FaBars className="hs-collapse-open:hidden flex-shrink-0 w-6 h-6" />
            <FaXmark className="hs-collapse-open:block hidden flex-shrink-0 w-6 h-6" />
            <span className="hidden md:block">Menu</span>
          </button>
          <button
            type="button"
            className=" ml-3 xl:hidden hs-collapse-toggle inline-flex justify-center items-center gap-x-2 overflow-hidden rounded-lg bg-transparent text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400"
            data-hs-collapse="#categoryNavMenu"
            aria-controls="categoryNavMenu"
            aria-label="Toggle navigation"
          >
            <BsFillGrid3X3GapFill className="hs-collapse-open:hidden flex-shrink-0 w-6 h-6" />
            <FaXmark className="hs-collapse-open:block hidden flex-shrink-0 w-6 h-6" />
            <span className="hidden md:block">Category</span>
          </button>
          {/* main nav menu start */}
          <div
            id="mainNavMenu"
            className="absolute top-[138%] w-full bg-white shadow-md rounded-lg xl:rounded-none xl:top-full xl:bg-transparent xl:shadow-none xl:p-0 xl:w-auto xl:flex-auto xl:static hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:flex dark:bg-gray-800 xl:dark:bg-transparent"
          >
            <div className="p-3 flex flex-col xl:flex-row xl:p-0">
              <div className="flex flex-col gap-5 [--trigger:hover] xl:flex-row xl:items-center xl:justify-start">
                <div className="hs-dropdown [--strategy:static] xl:[--strategy:fixed] [--adaptive:none]">
                  <button type="button" className="dropdown-btn ">
                    Listings
                    <FaAngleDown className="w-3 h-3" />
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-60 z-10 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Hotel
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Home
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Chain
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Resort
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Grid
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel List
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Room Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hotel Booking
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Flight
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Flight Home
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Flight List
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Flight Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Flight Booking
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Tour
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Tour Home
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Tour Grid
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Tour Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Tour Booking
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Cab
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Cab Home
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Cab List
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Cab Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Cab Booking
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Directory
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Directory Home
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Directory Detail
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Add Listing
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Join Us
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Add Listing
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Add Listing Minimal
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Listing Added
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Hero
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Hero Inline Form
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hero Multiple Search
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hero Image Gallery
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Hero Split
                        </a>
                      </div>
                    </div>
                    <a className="nav-link sub-nav-link" href="#">
                      Booking Confirmed
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Compare Listing
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Offer Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 [--trigger:hover] xl:flex-row xl:items-center xl:justify-start">
                <div className="hs-dropdown [--strategy:static] xl:[--strategy:fixed] [--adaptive:none]">
                  <button type="button" className="dropdown-btn ">
                    Pages
                    <FaAngleDown className="w-3 h-3" />
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-60 z-10 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                    <a className="nav-link sub-nav-link" href="#">
                      About
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Contact
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Contact 2
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Our Team
                    </a>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Authentication
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Sign In
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Sign Up
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Forget Password
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Two factor authentication
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Blog
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Blog
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Blog Detail
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Help
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Help Center
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Help Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Privacy Policy
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Terms of Service
                        </a>
                      </div>
                    </div>
                    <a className="nav-link sub-nav-link" href="#">
                      Pricing
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      FAQs
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      404 Not Found
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 [--trigger:hover] xl:flex-row xl:items-center xl:justify-start">
                <div className="hs-dropdown [--strategy:static] xl:[--strategy:fixed] [--adaptive:none]">
                  <button type="button" className="dropdown-btn ">
                    Accounts
                    <FaAngleDown className="w-3 h-3" />
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-60 z-10 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        User Profile
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          My Profile
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          My Bookings
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Travelers
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Payment Details
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Wishlist
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Settings
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Delete Profile
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Agent Dashboard
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Dashboard
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Listings
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Bookings
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Activities
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Earnings
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Reviews
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Settings
                        </a>
                      </div>
                    </div>
                    <div className="hs-dropdown relative [--trigger:hover] [--strategy:static] xl:[--strategy:absolute] [--adaptive:none]">
                      <button
                        type="button"
                        className="nav-link sub-nav-link  justify-between w-full"
                      >
                        Help
                        <FaEllipsis />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] xl:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 xl:w-64 hidden z-10 xl:mt-2 bg-white xl:shadow-md rounded-lg p-2 dark:bg-dark dark:divide-gray-700 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 top-0 left-full">
                        <a className="nav-link sub-nav-link" href="#">
                          Help Center
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Help Detail
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Privacy Policy
                        </a>
                        <a className="nav-link sub-nav-link" href="#">
                          Terms of Service
                        </a>
                      </div>
                    </div>
                    <a className="nav-link sub-nav-link" href="#">
                      Pricing
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      FAQs
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      404 Not Found
                    </a>
                    <a className="nav-link sub-nav-link" href="#">
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
              <MoreLinkDropdown />
            </div>
          </div>
          {/* main nav menu end */}
          {/* category nav menu start */}
          <div
            id="categoryNavMenu"
            className="absolute top-[138%] w-full bg-white shadow-md rounded-lg xl:rounded-none xl:top-full xl:bg-transparent xl:shadow-none xl:w-auto xl:flex-auto xl:static hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:block dark:bg-gray-800 xl:dark:bg-transparent"
          >
            <div className="flex flex-col gap-x-1 mt-5 p-3 xl:p-0 xl:flex-row xl:items-center xl:justify-end xl:mt-0">
              <a className="nav-link justify-center active" href="#">
                <FaHotel /> Hotel
              </a>
              <a className="nav-link justify-center" href="#">
                <FaPlane /> Flight
              </a>
              <a className="nav-link justify-center" href="#">
                <FaEarthAmericas /> Tour
              </a>
              <a className="nav-link justify-center" href="#">
                <FaCar /> Cab
              </a>
            </div>
          </div>
          {/* category nav menu end */}
          {/* notification and profile start */}
          <ul className="flex gap-x-4 ml-3 md:ml-4 xl:ml-5">
            <li>
              <NotificationDropdown />
            </li>
            <li>
              <ProfileDropdown />
            </li>
          </ul>
          {/* notification and profile end */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
