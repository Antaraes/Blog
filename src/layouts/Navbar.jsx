import { routes } from "@/routes/routes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
