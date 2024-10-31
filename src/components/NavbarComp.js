import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 700) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="sticky-top">
      <Navbar
        variant="dark"
        expand="lg"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Peta Polinela
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#gallery" className="mx-2">
                Gallery
              </Nav.Link>
              <Nav.Link href="#service" className="mx-2">
                Service
              </Nav.Link>
              <Nav.Link href="#faq" className="mx-2">
                Faq
              </Nav.Link>
              <Nav.Link href="#contact" className="mx-2">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
