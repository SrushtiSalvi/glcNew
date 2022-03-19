import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

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
