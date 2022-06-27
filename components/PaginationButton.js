import React from "react";
import Link from "next/link";

const PaginationButton = ({ url, children, disabled }) => {
  return (
    <Link href={url}>
      <a
        aria-disabled={disabled}
        className={`hover:underline font-semibold flex items-center ${
          disabled ? "pointer-events-none text-gray-400" : "text-blue-700"
        } hover:text-blue-400`}
      >
        {children}
      </a>
    </Link>
  );
};

export default PaginationButton;
