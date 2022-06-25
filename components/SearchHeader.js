import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import User from "./User";
import {searchFor} from "../utils/search";

const SearchHeader = () => {
  const router = useRouter();
  const q = router.query.q || "";
  const [query, setQuery] = useState(q);
  useEffect(() => setQuery(q), [q]);

  const handleQueryChange = (e) => setQuery(e.target.value);
  const clearSearchInput = () => setQuery("");
  const search = (e) => searchFor(e, router, query, router.query.type);

  return (
      <header className="sticky top-0 bg-white p-2 sm:p-6 flex items-center justify-between">
        <Logo width={100}/>
        <form
            onSubmit={search}
            className="flex w-full lg:w-1/2 max-w-2xl mx-2 sm:mx-10 ring-1 ring-gray-200 p-3
         rounded-full shadow-md space-x-2"
        >
          <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              className="w-full focus:outline-none mx-3"
          />
          {query && (
              <XIcon
                  className="h-6 text-gray-500 border-r-2 border-gray-300 pr-2 cursor-pointer"
                  onClick={clearSearchInput}
              />
          )}
          <SearchIcon className="h-6 text-blue-500 cursor-pointer"/>
          <MicrophoneIcon className="h-6 text-blue-500 cursor-pointer"/>
        </form>
        <div className="sm:ml-auto">
          <User/>
        </div>
      </header>
  );
};

export default SearchHeader;
