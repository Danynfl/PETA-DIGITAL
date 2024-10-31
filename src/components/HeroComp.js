import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div
      className="hero min-vh-100 w-100 d-flex align-items-center justify-content-center"
      id="home"
    >
      <Container>
        <Row>
          <Col>
            <h1 className="text-white text-center fs-1 animate__animated animate__fadeInLeft">
              PEDIGI
            </h1>
            <h1 className="text-white text-center fs-1 animate__animated animate__fadeInRight">
              (PETA DIGITAL POLINELA)
            </h1>
            <p className="text-white text-center text-white-55 animate__animated animate__fadeInUp animate__delay-1s">
              Mengenalkan Maps Polinela untuk mengetahui lokasi dan titik gedung
              atau ruangan <br /> terkait yang terintegrasi dengan tepat, untuk
              memudahkan khalayak ramai.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
