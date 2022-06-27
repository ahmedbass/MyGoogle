import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useCallback, useContext, useState } from "react";
import Router from "next/router";
import Header from "./../components/Header";
import Logo from "../components/Logo";
import { searchFor } from "../utils/search";
import ToggleSearchSettings from "../components/ToggleSearchSettings";
import SearchContext from "../store/search-context";

export default function Home(props) {
  const autoFocus = useCallback((el) => el?.focus(), []);
  const [query, setQuery] = useState("");
  const searchCtx = useContext(SearchContext);

  const search = (e) =>
    searchFor(e, Router, { q: query.trim(), type: "", useMock: searchCtx.useMock });

  const randomSearch = async (e) => {
    e.preventDefault();
    const word = (
      await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json())
    )[0];
    const randomType = ["", "image"][Math.floor(Math.random() * 2)];
    searchFor(e, Router, { q: word, type: randomType });
  };

  return (
    <>
      <Header />
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center mt-40">
          <Logo width={300} />
          <form className="w-full flex flex-col justify-center items-center">
            <div
              className="w-full flex my-8 py-3 px-4 rounded-full items-center justify-center border
                max-w-[90%] hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
              <SearchIcon className="h-5 text-gray-500" />
              <input
                ref={autoFocus}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="flex-grow focus:outline-none mx-3"
              />
              <MicrophoneIcon className="h-5 text-blue-500" />
            </div>

            <div className="flex justify-center flex-col sm:flex-row w-1/2 space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="btn" onClick={search}>
                Google Search
              </button>
              <button className="btn" onClick={randomSearch}>
                I&apos;m Feeling Lucky
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
