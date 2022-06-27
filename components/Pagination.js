import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import SearchContext from "../store/search-context";
import PaginationButton from "./PaginationButton";

const Pagination = ({ currentReq }) => {
  console.log({ currentReq });
  const useMock = useContext(SearchContext).useMock;
  const { startIndex, count, searchTerms, searchType, totalResults } = currentReq;
  const next = startIndex + count > totalResults ? startIndex : startIndex + count;
  const previous = startIndex - count < 0 ? startIndex : startIndex - count;
  const type = searchType ? `&type=${searchType}` : "";
  const baseUrl = `/search?q=${searchTerms}${type}&useMock=${useMock}`;

  return (
    <div className="mt-10 flex justify-between max-w-xl">
      <PaginationButton url={`${baseUrl}&start=${previous}`} disabled={startIndex - count <= 0}>
        <ChevronLeftIcon className="h-6" />
        Previous
      </PaginationButton>

      <p>Page {Math.ceil(currentReq.startIndex / currentReq.count)}</p>

      <PaginationButton url={`${baseUrl}&start=${next}`}>
        Next
        <ChevronRightIcon className="h-6" />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
