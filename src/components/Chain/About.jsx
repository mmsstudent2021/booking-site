import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="py-0 lg:py-16">
        <div className="mb-4">
          <ye-h2>
            We always provide the best for our hotel visitors. We are happy to
            help you.
          </ye-h2>
          <p className="text-bodyColor">
            We focus a great deal on the understanding of behavioral psychology
            and influence triggers which are crucial for becoming a well-rounded
            Digital Marketer. We understand that theory is important to build a
            solid foundation, we understand that theory alone isn't going to get
            the job done.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 md:col-span-12 lg:col-span-4 rounded-2xl flex flex-col gap-[1.6rem] p-[26px] bg-beautifulBlue bg-opacity-10">
            <div className="font-heading flex justify-between items-center">
              <a className="text-beautifulBlue text-[36px] font-bold" href="#">
                <span>10</span>
              </a>
              <p className="font-medium font-heading">Total Hotels</p>
            </div>
            <div className="font-heading flex justify-between items-center">
              <a className="text-beautifulBlue text-[36px] font-bold" href="#">
                <span>200</span>
                <span>+</span>
              </a>
              <p className="font-medium font-heading">Total Staff</p>
            </div>
            <div className="font-heading flex justify-between items-center">
              <a className="text-beautifulBlue text-[36px] font-bold" href="#">
                <span>50</span>
                <span>+</span>
              </a>
              <p className="font-medium font-heading">Amazing Services</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl relative">
            <img
              src="../../../../src/img/aboutImg.jpg"
              className="rounded-2xl w-full h-full"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-headingColor px-3 py-2 self-start text-base font-body font-bold tracking-[0.5px] border border-headingColor rounded-lg flex gap-2 items-center hover:bg-graysome hover:border-graysome duration-300">
              <span>
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <rect width={256} height={256} fill="none" />
                  <path
                    d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                  />
                  <circle
                    cx={128}
                    cy={128}
                    r={32}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                  />
                </svg>
              </span>
              <span>View 360</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2x">
            <ul className="flex flex-col">
              <li className="py-4 flex items-center gap-3">
                <span>
                  <svg
                    className="w-4 text-info"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <rect
                      x={16}
                      y={64}
                      width={224}
                      height={128}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M240,112a48,48,0,0,1-48-48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <circle
                      cx={128}
                      cy={128}
                      r={28}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M64,64a48,48,0,0,1-48,48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M192,192a48,48,0,0,1,48-48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M16,144a48,48,0,0,1,48,48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                  </svg>
                </span>

                <h6>Best Rate Guaranteed</h6>
              </li>
              <li className="py-4 flex items-center gap-3">
                <span>
                  <svg
                    className="w-4 text-warning"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <rect
                      x={24}
                      y={56}
                      width={208}
                      height={144}
                      rx={8}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <line
                      x1={164}
                      y1={164}
                      x2={196}
                      y2={164}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <line
                      x1={116}
                      y1={164}
                      x2={128}
                      y2={164}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <line
                      x1={24}
                      y1={100}
                      x2={232}
                      y2={100}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                  </svg>
                </span>
                <h6>Payment at Hotel</h6>
              </li>
              <li className="py-4 flex items-center gap-3">
                <span>
                  <svg
                    className="w-4 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <rect
                      x={32}
                      y={56}
                      width={192}
                      height={144}
                      rx={16}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M32,100H88.81a8,8,0,0,1,7.83,6.4,32,32,0,0,0,62.72,0,8,8,0,0,1,7.83-6.4H224"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                  </svg>
                </span>
                <h6>Exclusive Members Rewards</h6>
              </li>
              <li className="py-4 flex items-center gap-3">
                <span>
                  <svg
                    className="w-4 text-danger"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <circle cx={128} cy={204} r={16} />
                    <path
                      d="M232,93.19a164,164,0,0,0-208,0"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M200,129a116,116,0,0,0-144,0"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <path
                      d="M168,165a68,68,0,0,0-80,0"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                  </svg>
                </span>
                <h6>WIFI Access</h6>
              </li>
              <li className="py-4 flex items-center gap-3">
                <span>
                  <svg
                    className="w-4 text-warning"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <path
                      d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={24}
                    />
                    <circle cx={84} cy={84} r={16} />
                  </svg>
                </span>
                <h6>No Hidden Changes</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
