import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import MiniFooter from "./MiniFooter";
import { BottomBar } from ".";

const Layout = () => {
  return (
    <div id="main" className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
      <MiniFooter />
      <BottomBar />
    </div>
  );
};

export default Layout;
