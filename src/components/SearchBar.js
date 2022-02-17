import React from "react";

const SearchBar = () => {
  return (
    <div>
      {/* <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4"></button>
      </div> */}
      <div>
        <div className="relative">
          <input
            type="text"
            className="h-10 w-full pr-8 py-6 mt-10 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search For An Image..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
