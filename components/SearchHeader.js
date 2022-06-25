import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Logo from "./Logo";
import User from "./User";
import { searchFor } from "../utils/search";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  const router = useRouter();
  let query = router.query.q || "";
  let type = router.query.type || "all";

  const [showClearBtn, setShowClearBtn] = useState(true);
  const searchInputRef = useRef();

  const clearSearchInput = () => {
    searchInputRef.current.value = "";
    setShowClearBtn(false);
  };

  const search = (e) => searchFor(e, router, searchInputRef.current.value, type);

  return (
    <header className="sticky top-0 bg-white p-2 sm:p-6">
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

      <SearchHeaderOptions query={query} type={type} />
    </header>
  );
};

export default SearchHeader;
