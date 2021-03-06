import React from "react";
import Parser from "html-react-parser";

const SearchResultItem = ({searchItem}) => {
  return (
      <div className="mt-4 space-y-7">
        <div className="space-y-1 max-w-xl">
          <div className="group">
            <a href={searchItem.link} className="text-sm text-gray-900">
              <p className="truncate">
                {searchItem.formattedUrl || searchItem.link}
              </p>
            </a>

            <a
                href={searchItem.link}
                className="group-hover:underline text-blue-800 font-semibold text-lg line-clamp-2"
            >
              <h2>{searchItem.title}</h2>
            </a>
          </div>

          <p className=" text-gray-600 line-clamp-2">
            {Parser(searchItem.htmlSnippet)}
          </p>
        </div>
      </div>
  );
};

export default SearchResultItem;
