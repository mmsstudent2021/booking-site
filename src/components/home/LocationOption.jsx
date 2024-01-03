import React from "react";

const LocationOption = ({locationOption: {value, location}}) => {
  return (
    <option
      value={value}
    >
      {location}
    </option>
  );
};

export default LocationOption;
