import React from "react";
import { Row, Form, InputGroup, Col, Button, Container } from "react-bootstrap";
import { useState } from "react";

function ContactComp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="service d-flex align-item-center" id="contact">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold mt-5 text-white">Contact</h1>
            <p className="text-center text-white">
              Ada yang ingin anda sampaikan pada kami?
              <br /> bisa contact kami lewat form berikut
            </p>
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 row-cols-lg-2 row-cols-1">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="text-white">Nama</Form.Label>
              <Form.Control required type="text" placeholder="nama" />
              <Form.Control.Feedback className="text-white">
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label className="text-white">Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend" className="text-white">
                  @
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  Mohon isi email anda.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Form Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" className="mb-5">
            Kirim
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ContactComp;
