import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <main className="p-5">
      Layout
      <Outlet />
    </main>
  );
};

export default Layout;
