import React, { useEffect } from "react";
import flatpickr from "flatpickr";

const DatePicker = () => {
  useEffect(() => {
    flatpickr("#checkIn", {
      minDate: "today",
      altInput: true,
      altFormat: "j M",
      dateFormat: "Y-m-d",
      mode: "range",
      defaultDate: ["today", "2024-1-26"],
    });
  });
  return (
    <div className="relative flex-auto">
      <input
        type="text"
        id="checkIn"
        className="py-3 px-4 block w-full rounded-lg border border-gray-300 outline-none focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-dark dark:border-gray-700 dark:text-gray-300 "
        placeholder="Check In"
      />
      <label className="text-gray-500 bg-white px-2 absolute top-0 left-4 -translate-y-1/2 dark:text-gray-400 dark:bg-dark">
        Check in - out
      </label>
    </div>
  );
};

export default DatePicker;
