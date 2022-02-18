import React, { useState } from "react";
import useSearch from "../Contexts/SearchContext";
import useImages from "../hooks/useImages";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <header>
      <div>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-full pr-8 py-6 mt-10 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search For An Image..."
          />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
