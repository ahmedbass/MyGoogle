import React from "react";
import Link from "next/link";

const PaginationButton = ({ url, children, disabled }) => {
  return (
    <Link href={url}>
      <a className="text-blue-500 hover:underline font-semibold flex items-center">{children}</a>
    </Link>
  );
};

export default PaginationButton;
