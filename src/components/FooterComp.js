import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterComp() {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Project Mandiri</h3>
          </Col>
          <Col className="text-end">
            <i className="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-youtube text-white fs-1 mx-lg-3 mx-2"></i>
            <i className="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center text-white-50 ">
              &copy; Copyright{" "}
              <a
                href="https://polinela.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-bold text-decoration-none text-white-50"
              >
                POLINELA
              </a>{" "}
              2024, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;
