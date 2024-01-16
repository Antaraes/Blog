import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { AdminRoutes } from "@/routes/routes";

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = AdminRoutes.find((route) => route.path === location.pathname);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary px-5 py-3 border-bottom d-flex justify-content-between "
    >
      <Navbar.Brand to="/">{currentRoute ? currentRoute.name : "Unknown"}</Navbar.Brand>
      <div className="d-flex align-items-center gap-3">
        <Button className="w-100" variant="outline-dark" onClick={() => navigate("/")}>
          Visit Site
        </Button>
        <IoNotificationsOutline size={30} />
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
