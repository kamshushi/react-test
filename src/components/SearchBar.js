import React from "react";

const SearchBar = () => {
  return (
    <div>
      {/* <div class="pt-2 relative mx-auto text-gray-600">
        <input
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4"></button>
      </div> */}
      <div>
        <div class="relative">
          <input
            type="text"
            class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search For An Image..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
