import { author } from "@/assets/images";
import { addAccessToken, addRefreshToken, addUser, logout } from "@/redux/user/userSlice";
import { routes } from "@/routes/routes";
import { useRef } from "react";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    const dropdown = dropdownRef.current;
    if (dropdown) {
      const dropdownButton = dropdown.querySelector(".dropdown-toggle");
      if (dropdownButton) {
        dropdownButton.click();
      }
    }
  };
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };

  console.log(isAuthenticated);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-3 border-bottom ">
      <Container>
        <Navbar.Brand as={Link} to="/">
          NORDIC ROSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav variant="underline">
            <Nav.Item>
              {isAuthenticated && user.role === "admin" && (
                <Nav.Link onClick={() => navigate("/admin")}>Dashboard</Nav.Link>
              )}
            </Nav.Item>
            {routes.map((route, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={route.path}
                  className={location.pathname === route.path ? "active" : ""}
                >
                  {route.name}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className=" d-md-flex justify-content-md-center align-items-center">
              {isAuthenticated ? (
                <>
                  <Dropdown data-bs-theme="dark" style={{ background: "transparent" }}>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      style={{ background: "transparent", outline: "none", border: "0" }}
                    >
                      <Image
                        src={author}
                        alt="you"
                        roundedCircle
                        className=" "
                        width={40}
                        style={{ cursor: "pointer" }}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item to={"/me"} as={Link} active>
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Nav.Link as={Link} to={"/auth/signin"}>
                  Sign In
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
