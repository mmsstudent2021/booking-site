import React from "react";
import LocationOption from "./LocationOption";

const LocationSelect = () => {
  const locationOptions = [
    {
      id: 1,
      value: 1,
      location: "San Jacinto, USA",
    },
    {
      id: 2,
      value: 2,
      location: "North Dakota, Canada",
    },
    {
      id: 3,
      value: 3,
      location: "West Virginia, Paris",
    },
    {
      id: 4,
      value: 4,
      location: "Yangon, Myanmar",
    },
    {
      id: 5,
      value: 5,
      location: "Mandalay, Myanmar",
    },
  ];
  return (
    <div className="relative flex-auto">
      <select
        data-hs-select='{
"hasSearch": true,
"searchPlaceholder": "Search...",
"searchClasses": "block w-full border-2 border-blue-500 rounded-lg outline-none focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 py-2 px-3",
"searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-dark",
"placeholder": "Select Location...",
"toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"dark:text-gray-300\" data-title></span></button>",
"toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-300 rounded-lg overflow-hidden text-start focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-dark dark:border-gray-700 dark:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
"dropdownClasses": "mt-2 max-h-[300px] pb-1 px-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-dark dark:border-gray-700",
"optionClasses": "py-1 px-4 w-full text-gray-800 cursor-pointer hover:bg-blue-500/[0.1] rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-dark dark:hover:bg-blue-300/[0.1] dark:text-gray-200 dark:focus:bg-slate-800",
"optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-500 dark:text-gray-300\" data-title></div></div></div>"
    }'
        className="hidden"
      >
        <option value="">Choose Location</option>
        {locationOptions.map((locationOption) => (
          <LocationOption
            key={locationOption.id}
            locationOption={locationOption}
          />
        ))}
      </select>
      <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      </div>
      <label className="text-gray-500 bg-white px-2 absolute top-0 left-4 -translate-y-1/2 dark:text-gray-400 dark:bg-dark">
        Location
      </label>
    </div>
  );
};

export default LocationSelect;
