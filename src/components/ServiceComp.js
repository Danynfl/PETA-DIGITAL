import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ServiceComp() {
  return (
    <div className="service d-flex align-item-center" id="service">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1
              className="text-center text-white fw-bold mt-5"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              Service
            </h1>
            <p
              className="text-center text-white"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              Menyediakan layanan untuk pengguna website
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <i className="fa-solid fa-map fs-2 mb-4 text-white"></i>
            <h5 className="fw-bold text-white">Test</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <i className="fa-solid fa-map fs-2 mb-4 text-white"></i>
            <h5 className="fw-bold text-white">Test</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <i className="fa-solid fa-map fs-2 mb-4 text-white"></i>
            <h5 className="fw-bold text-white">Test</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComp;
