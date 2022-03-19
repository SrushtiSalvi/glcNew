import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer className="hidden" />
    </div>
  );
};

export default Layout;
