import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useCallback, useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const autoFocus = useCallback((el) => el?.focus(), []);
  const searchInputRef = useRef(null);
  const search = (e) => {
    const q = searchInputRef.current.value.trim();
    if (!q) return;
    router.push({ pathname: "/search", query: { q, type: "all" } });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center -mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google"
          width="300"
          height="100"
        />

        <div
          className="w-full flex my-8 py-3 px-4 rounded-full items-center justify-center border 
            max-w-[90%] hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none mx-3"
          />
          <MicrophoneIcon className="h-5 text-blue-500" />
        </div>

        <div className="flex justify-center flex-col sm:flex-row w-1/2 space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I&#39;m Feeling Lucky</button>
        </div>
      </div>
    </div>
  );
}
