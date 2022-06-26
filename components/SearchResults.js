import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-10 lg:mx-44">
      <p className="text-sm text-gray-500">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>

      <div className="mt-4 space-y-7">
        {results.items.map((item) => (
          <SearchResultItem key={item.link} searchItem={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
