// Sidebar.js
import { AdminRoutes } from "@/routes/routes";
import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/user/userSlice";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };
  return (
    <Navbar
      className="bg-light border-right position-fix   d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 gap-4"
      id="sidebar"
      style={{ height: "100%", position: "fixed" }}
    >
      <Navbar.Brand as={Link} to="/admin" className="p-3">
        NORDIC ROSE
      </Navbar.Brand>

      <Nav className="flex-column">
        {AdminRoutes.map((route, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              as={Link}
              to={route.path}
              className={`${
                location.pathname === route.path ? "active bg-primary text-white" : ""
              } d-flex align-items-center gap-3 mt-2`}
            >
              {route.icon}
              {route.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mt-auto">
        <div className=" d-flex gap-4  align-items-center justify-content-around">
          <div>
            <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="40" />
          </div>

          <div class="">
            <p class="m-0">Clarke Jeffery</p>
            <span>Admin</span>
          </div>
          <IoLogOutOutline size={30} onClick={handleLogout} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;
