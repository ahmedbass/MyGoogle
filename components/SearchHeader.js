import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
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
    <header className="sticky top-0 bg-white p-3 sm:p-6 pb-0 sm:pb-0">
      <div className="flex items-center justify-between">
        <Logo width={100} />
        <form
          onSubmit={search}
          className="flex w-full lg:w-1/2 max-w-2xl mx-2 sm:mx-10 ring-1 ring-gray-200 px-3
              rounded-full shadow-md space-x-3 items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            defaultValue={query}
            onChange={(e) => setShowClearBtn(e.target.value.length > 0)}
            className="w-full focus:outline-none p-3"
          />
          {showClearBtn && (
            <XIcon
              className="h-7 text-gray-500 border-r border-gray-300 pr-2 cursor-pointer"
              onClick={clearSearchInput}
            />
          )}
          <MicrophoneIcon className="h-7 sm:px-1 text-blue-500 cursor-pointer" />
          <SearchIcon
            className="h-7 sm:px-1 text-blue-500 cursor-pointer"
            onClick={search}
          />
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
