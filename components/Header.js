import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchContext from "../store/search-context";
import { useContext } from "react";

const Header = (props) => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google">
          <a className="link">About</a>
        </Link>
        <Link href="https://store.google.com">
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com">
          <a className="link">Gmail</a>
        </Link>
        <Link href={`/search?q=${router.query.q || "google"}&type=image`}>
          <a className="link">Images</a>
        </Link>
        <User />
      </div>
    </header>
  );
};

export default Header;
