import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import User from "./User";
import { searchFor } from "../utils/search";
import SearchHeaderOptions from "./SearchHeaderOptions";
import SearchContext from "../store/search-context";

const SearchHeader = () => {
  const searchCtx = useContext(SearchContext);
  const router = useRouter();
  let query = router.query.q || "";
  let [type, setType] = useState(router.query.type || "");

  const [showClearBtn, setShowClearBtn] = useState(true);
  const searchInputRef = useRef();

  const clearSearchInput = () => {
    searchInputRef.current.value = "";
    setShowClearBtn(false);
  };

  const search = (e) =>
    searchFor(e, router, {
      q: searchInputRef.current.value?.trim(),
      type,
      useMock: searchCtx.useMock,
    });

  const searchBy = (type) => setType(type);
  useEffect(() => search(), [type]);

  return (
    <header className="sticky top-0 bg-white p-3 sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <Logo width={100} />
        <form
          onSubmit={search}
          className="flex w-full lg:w-1/2 max-w-2xl mx-2 sm:mx-10 ring-1 ring-gray-200 p-3
              rounded-full shadow-md space-x-1">
          <input
            ref={searchInputRef}
            type="text"
            defaultValue={query}
            onChange={(e) => setShowClearBtn(e.target.value.length > 0)}
            className="w-full focus:outline-none mx-3"
          />
          {showClearBtn && (
            <XIcon
              className="h-6 text-gray-500 border-r-2 border-gray-300 pr-2 cursor-pointer"
              onClick={clearSearchInput}
            />
          )}
          <SearchIcon className="h-6 px-2 text-blue-500 cursor-pointer" onClick={search} />
          <MicrophoneIcon className="h-6 px-2 text-blue-500 cursor-pointer" />
        </form>
        <div className="sm:ml-auto">
          <User />
        </div>
      </div>

      <SearchHeaderOptions query={query} type={type} searchBy={searchBy} />
    </header>
  );
};

export default SearchHeader;
