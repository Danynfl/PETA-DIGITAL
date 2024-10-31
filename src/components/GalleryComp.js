import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/img/gallery/PPA.jpg";
import Gallery2 from "../assets/img/gallery/PPA1.jpg";
import Gallery3 from "../assets/img/gallery/Polinela.jpg";

// href nantinya akan di isi dengan jalur yang akan menuju file GIS

// const GISLink1 = "/path/to/file1.kml";
// const GISLink2 = "/path/to/file2.shp";
// const GISLink3 = "/path/to/file3.kmz";

function GalleryComp() {
  return (
    <div className="gallery min-vh-100 f-flex align-item-center " id="gallery">
      <Container>
        <Row className="mb-5" data-aos="fade-up" data-aos-duration="1000">
          <Col>
            <h2 className="text-center text-white fw-bold">
              Pilihan Gedung yang ada di
            </h2>
            <h1 className="text-center text-white fw-bold">
              POLITEKNIK NEGRI LAMPUNG
            </h1>
            <p className="text-center text-white">
              Kami menyediakan bebarapa pilihan gedung untuk <br /> memudahkan
              anda mengenal gedung-gedung yang ada di politeknik negri lapung
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="200"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="400"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="600"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="800"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="1200"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="1400"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="1600"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="1800"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="2200"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="2400"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="2600"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="2800"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery1}
                alt="PPA"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="3200"
              />
              <div className="overlay">
                <p className="image-text">PPA Event</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery2}
                alt="PPA1"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="3400"
              />
              <div className="overlay">
                <p className="image-text">PPA Conference</p>
              </div>
            </a>
          </Col>
          <Col className="image-container">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={Gallery3}
                alt="Polinela"
                className="w-100 gallery-image"
                data-aos="fade-up"
                data-aos-duration="3600"
              />
              <div className="overlay">
                <p className="image-text">Polinela Campus</p>
              </div>
            </a>
          </Col>
          {/* Tambahkan lebih banyak gambar jika diperlukan */}
        </Row>
      </Container>
    </div>
  );
}

export default GalleryComp;
