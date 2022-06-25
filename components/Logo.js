import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Logo = ({ width = 300 }) => {
  const router = useRouter();
  const visitHome = () => router.push("/");
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
      alt="Logo"
      width={width}
      height={parseInt(width / 3)}
      onClick={visitHome}
      className="cursor-pointer"
    />
  );
};

export default Logo;
