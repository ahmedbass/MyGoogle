import React from "react";
import SearchResultItem from "./SearchResultItem";
import Pagination from "./Pagination";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-5 lg:mx-44 mt-3">
      <p className="text-sm text-gray-500">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>

      <div className="mt-4 space-y-7">
        {results.items.map((item) => (
          <SearchResultItem key={item.link} searchItem={item} />
        ))}
      </div>
      <Pagination currentReq={results.queries.request[0]} />
    </div>
  );
};

export default SearchResults;
