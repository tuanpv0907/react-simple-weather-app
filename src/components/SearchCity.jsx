import React from "react";

const SearchCity = ({ city, search, setCity, handleUnitsClick }) => {
  return (
    <div className="section section__inputs">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button onClick={(e) => handleUnitsClick(e)}>°F</button>
    </div>
  );
};

export default SearchCity;
