import React from "react";
import SearchResultImage from "./SearchResultImage";

const SearchResults = ({ results }) => {
  return (
    <div className="m-5 max-w-[1920px] mx-auto">
      <div
        className="sm:mx-5 grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
       space-x-4 space-y-4 items-center"
      >
        {results.items.map((item) => (
          <SearchResultImage key={item.link} searchItem={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
