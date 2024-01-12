import React from "react";

const SearchLocation = () => {
  return (
    <div className="mt-6">
      <form>
        <div>
          <input
            type="search"
            id="location-search"
            name="location-search"
            placeholder="Search for area, Street name.."
            className="bg-white border border-gray-300 p-2 h-12 w-72 focus:outline-none focus:shadow placeholder-gray-400 text-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchLocation;
