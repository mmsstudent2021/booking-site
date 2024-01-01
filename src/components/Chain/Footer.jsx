import React from "react";

const Footer = () => {
  return (
    <footer class="bg-headingColor">
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-12">
          <div class="xl:col-span-3 col-span-12 mb-8 xl:mb-0">
            <a href="index.html">
              <img
                className="text-white h-12 max-w-[130px]"
                src="../../../src/img/logo-footer.svg"
              />
            </a>

            <p class="my-3 text-footerParaColor">
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>

            <p className="mb-2">
              <a
                href="#"
                className="text-footerParaColor flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +1234 568 963
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-footerParaColor flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                example@gmail.com
              </a>
            </p>
          </div>

          <div className="xl:col-span-9 col-span-12 xl:pl-[100px] flex flex-wrap gap-y-5">
            <div className="md:w-1/4 w-1/2">
              <h5 className="text-white mb-[25.6px]">Page</h5>

              <ul className="flex flex-col gap-2 text-footerParaColor">
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    News and Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Meet a Team
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/4 w-1/2">
              <h5 className="text-white mb-[25.6px]">Link</h5>

              <ul className="flex flex-col gap-2 text-footerParaColor">
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Sign up
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Cookies
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/4 w-1/2">
              <h5 className="text-white mb-[25.6px]">Global Site</h5>

              <ul className="flex flex-col gap-2 text-footerParaColor">
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    India
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    California
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Indonesia
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Canada
                  </a>
                </li>
                <li>
                  <a className="hover:text-beautifulBlue duration-200" href="#">
                    Malaysia
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/4 w-1/2">
              <h5 className="text-white mb-[25.6px]">Booking</h5>

              <ul className="flex flex-col gap-2 text-footerParaColor">
                <li>
                  <a
                    className="hover:text-beautifulBlue duration-200 flex gap-2 items-center"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={16}
                      width={16}
                      viewBox="0 0 512 512"
                      className="fill-footerParaColor"
                    >
                      <path
                        opacity={1}
                        d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                      />
                    </svg>
                    Hotel
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-beautifulBlue duration-200 flex gap-2 items-center"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={16}
                      width={16}
                      viewBox="0 0 640 512"
                      className="fill-footerParaColor"
                    >
                      <path
                        opacity={1}
                        d="M160 24c0-13.3 10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H280L384 192H500.4c7.7 0 15.3 1.4 22.5 4.1L625 234.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6L522.9 315.9c-7.2 2.7-14.8 4.1-22.5 4.1H384L280 464h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V320H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H82.7c8.5 0 16.6 3.4 22.6 9.4L160 192h32V48h-8c-13.3 0-24-10.7-24-24zM80 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"
                      />
                    </svg>
                    Flight
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-beautifulBlue duration-200 flex gap-2 items-center"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={16}
                      width={16}
                      viewBox="0 0 512 512"
                      className="fill-footerParaColor"
                    >
                      <path
                        opacity={1}
                        d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                      />
                    </svg>
                    Tour
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-beautifulBlue duration-200 flex items-center gap-2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={16}
                      width={16}
                      viewBox="0 0 512 512"
                      className="fill-footerParaColor"
                    >
                      <path
                        opacity={1}
                        d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                      />
                    </svg>
                    Cabs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h5 className="text-white mb-2">Top Links</h5>

          <ul className="text-footerParaColor flex leading-8 flex-wrap flex-shrink-0">
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Flights</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Hotels</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Tours</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">About</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Contact us</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Blogs</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Detail Page</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Policy</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Newsletters</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Podcasts</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Protests</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Flights</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">NewsCyber</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Education</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Sports</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Tech and Auto</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Opinion</a>
            </li>
            <li className="hover:text-beautifulBlue duration-200 mr-3">
              <a href="#">Share Market</a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="mt-3">
              <h5 className="text-white mb-2">Payment & Security</h5>
              <ul className="mt-3 flex flex-shrink-0 gap-3">
                <li>
                  <a href="#">
                    <img
                      src="../../../src/img/paypal.svg"
                      className="max-w-full h-[30px]"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../../../src/img/visa.svg"
                      className="max-w-full h-[30px]"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../../../src/img/mastercard.svg"
                      className="max-w-full h-[30px]"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="../../../src/img/expresscard.svg"
                      className="max-w-full h-[30px]"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-[25px]">
              <h5 className="text-white">Follow us on</h5>
              <ul className="mt-3 flex flex-shrink-0 gap-3">
                <li>
                  <a
                    href="#"
                    className="bg-facebookBtn hover:bg-opacity-85 duration-200 text-white px-[10px] aspect-square flex justify-center items-center rounded-md"
                  >
                    <img src="../../../src/img/facebook-f.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-instagramBtn hover:bg-opacity-85 duration-200 text-white px-[10px] aspect-square flex justify-center items-center rounded-md"
                  >
                    <img src="../../../src/img/instagram.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-twitterBtn hover:bg-opacity-85 duration-200 text-white px-[10px] aspect-square flex justify-center items-center rounded-md"
                  >
                    <img src="../../../src/img/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-linkedinBtn hover:bg-opacity-85 duration-200 text-white px-[10px] aspect-square flex justify-center items-center rounded-md"
                  >
                    <img src="../../../src/img/linkedin-in.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-[25px] border-hrColor border-opacity-25" />

        <div className="py-5 flex flex-col items-center justify-center gap-3 xl:gap-4 xl:flex-row xl:justify-between">
          <div className="text-footerParaColor">
            Copyrights ©2023 Booking. Build by
            <a href="#" className="hover:text-beautifulBlue duration-200">
              {" "}
              Webestica
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 xl:gap-7 text-footerParaColor">
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
    </footer>
  );
};

export default Footer;
