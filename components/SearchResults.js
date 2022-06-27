import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-5 lg:mx-44 mt-3">
      <p className="text-sm text-gray-500">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>

      {results.items.map((item) => (
        <SearchResultItem key={item.link} searchItem={item} />
      ))}
    </div>
  );
};

export default SearchResults;
