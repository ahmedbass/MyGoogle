import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-10 lg:mx-44">
      <p className="text-sm text-gray-500">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
};

export default SearchResults;
