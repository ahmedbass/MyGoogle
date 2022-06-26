import SearchHeaderOption from "./SearchHeaderOption";
import { LocationMarkerIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const SearchHeaderOptions = ({ query, type, searchBy }) => {
  const router = useRouter();

  return (
    <div className="flex lg:pl-36 pt-5 border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        type=""
        active={type === ""}
        searchBy={searchBy}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        type="image"
        active={type === "image"}
        searchBy={searchBy}
      />
      {/* <SearchHeaderOption
        title="Videos"
        Icon={PlayIcon}
        type="video"
        active={type === "video"}
        searchBy={searchBy.bind(this, "video")}
      />
      <SearchHeaderOption
        title="Maps"
        Icon={LocationMarkerIcon}
        type="map"
        active={type === "map"}
        searchBy={searchBy.bind(this, "map")}
      /> */}
    </div>
  );
};
export default SearchHeaderOptions;
