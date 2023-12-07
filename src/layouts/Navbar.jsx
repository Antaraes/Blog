import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NORDIC ROSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav variant="underline">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Link href="/links">Links</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
