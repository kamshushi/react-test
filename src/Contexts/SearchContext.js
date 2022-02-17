import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const obj = { searchTerm, setSearchTerm };
  return (
    <SearchContext.Provider value={obj}>{children}</SearchContext.Provider>
  );
};

export default function useSearch() {
  return useContext(SearchContext);
}
