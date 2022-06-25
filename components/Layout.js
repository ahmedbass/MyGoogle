import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
