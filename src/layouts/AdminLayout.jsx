import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block p-0 bg-light sidebar">
          <Sidebar />
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <AdminNavbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
