import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <NavigationBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
