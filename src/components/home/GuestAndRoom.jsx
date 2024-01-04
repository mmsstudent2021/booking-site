import React, { useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

const GuestAndRoom = () => {
  const [guest, setGuest] = useState({ adult: 2, child: 0 });
  const addAdult = () => setGuest({ ...guest, adult: guest.adult + 1 });
  const removeAdult = () =>
    guest.adult > 1 && setGuest({ ...guest, adult: guest.adult - 1 });
  const addChild = () => setGuest({ ...guest, child: guest.child + 1 });
  const removeChild = () =>
    guest.child > 0 && setGuest({ ...guest, child: guest.child - 1 });
  const [room, setRoom] = useState(1);
  const addRoom = () => room < 15 && setRoom(room + 1);
  const removeRoom = () => room > 1 && setRoom(room - 1);
  return (
    <div className="hs-dropdown relative inline-flex [--placement:top-left] w-full [--auto-close:inside]">
      <button
        id="hs-dropup"
        type="button"
        className="hs-dropdown-toggle w-full relative"
      >
        <input
          type="text"
          readOnly
          className="py-3 px-4 block w-full rounded-lg border border-gray-300 outline-none focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-dark dark:border-gray-700 dark:text-gray-300"
          value={`${guest.adult + guest.child} Guests ${room} Room`}
        />
        <label className="text-gray-500 bg-white px-2 absolute top-0 left-4 -translate-y-1/2 dark:text-gray-400 dark:bg-dark">
          Guests & rooms
        </label>
      </button>
      <div
        className="hs-dropdown-menu w-60 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg px-3 dark:bg-dark dark:border dark:border-gray-700 dark:divide-gray-700"
        aria-labelledby="hs-dropup"
      >
        <div className=" divide-y dark:divide-gray-700">
          <div className="flex justify-between items-center gap-x-3 py-3">
            <div className="">
              <h3 className="font-bold dark:text-gray-100">Adults</h3>
              <p className=" text-gray-500 text-sm dark:text-gray-400">Age 13 or above</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={removeAdult}>
                <BsDashCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
              <span className="font-bold w-3 text-center dark:text-gray-100">{guest.adult}</span>
              <button onClick={addAdult}>
                <BsPlusCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-3 py-3">
            <div className="">
              <h3 className="font-bold dark:text-gray-100">Child</h3>
              <p className=" text-gray-500 text-sm dark:text-gray-400">Age below 13</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={removeChild}>
                <BsDashCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
              <span className="font-bold w-3 text-center dark:text-gray-100">{guest.child}</span>
              <button onClick={addChild}>
                <BsPlusCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-3 py-3">
            <div className="">
              <h3 className="font-bold dark:text-gray-100">Rooms</h3>
              <p className=" text-gray-500 text-sm dark:text-gray-400">Max 8 rooms</p>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={removeRoom}>
                <BsDashCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
              <span className="font-bold w-3 text-center dark:text-gray-100">{room}</span>
              <button onClick={addRoom}>
                <BsPlusCircle className="text-blue-500 w-5 h-5 dark:text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestAndRoom;
