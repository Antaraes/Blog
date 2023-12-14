import { footerBrandMarquee } from "@/constants";
import React from "react";
import { Container, Nav } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid className="bg-dark p-3">
      <marquee behavior="" direction="left" className="text-light">
        {footerBrandMarquee.map((item) => (
          <span className="m-3 font-bold text-lg text-uppercase">{item}</span>
        ))}
      </marquee>
      <Container className="text-light text-center w-50 mt-5">
        <h1>NORDIC ROSE</h1>
        <p className="text-wrap text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas
          efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.{" "}
        </p>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="https://twitter.com" className="text-white">
              Twitter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://instagram.com" className="text-white">
              Instagram
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://viber.com" className="text-white">
              Viber
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <small className="">© 2012–2020 Nordic Rose Co. All rights reserved. </small>
      </Container>
    </Container>
  );
};

export default Footer;
