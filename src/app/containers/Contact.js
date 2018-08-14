// Third-party dependencies
import React from "react";
import { Grid, Row, Col, PageHeader, Button, Glyphicon } from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";
import Gmap from "Components/Gmap";
import Footer from "Components/Footer";

const map1 = {
  lat: 19.428911,
  lng: -99.139132
};

const Contact = () => (
  <div>
    <NavBar />
    <Grid className="_mt-50">
      <Row>
        <Col md={12}>
          <PageHeader className="text-center">Contacto</PageHeader>
        </Col>
      </Row>
      <Row className="_mtb-10">
        <Col md={6}>
          <div style={{ height: "350px", width: "100%" }}>
            <Gmap center={map1} zoom={19} />
          </div>
        </Col>
        <Col md={6}>
          <h4>Sucursal Mesones 18: </h4>
          <p>
            <strong>Dirección:</strong>
            Mesones No 18 B, Esq.Bolivar, Centro histórico, Ciudad de México.
          </p>
          <p>
            <strong>Telefono:</strong>
            (55) 5709-3840
          </p>
          <p>
            <strong>Correo:</strong>
            mesones18@rjdgalerias.com
          </p>
        </Col>
        <Col md={3} xs={12} className="text-center">
          <Button bsStyle="success">
            <a
              href="https://api.whatsapp.com/send?phone=525526637907"
              className="_text-white"
            >
              <Glyphicon glyph="comment" /> Enviar whats Mesones 18!
            </a>
          </Button>
        </Col>
        <Col md={3} xs={12} className="text-center">
          <Button bsStyle="success">
            <a
              href="https://api.whatsapp.com/send?phone=525545689074"
              className="_text-white"
            >
              <Glyphicon glyph="comment" /> Enviar whats Mesones 18A!
            </a>
          </Button>
        </Col>
      </Row>
    </Grid>
    <Footer />
  </div>
);

export default Contact;
