// Third-party dependencies
import React from "react";
import { Link } from "react-router";
import { Grid, Row, Col, PageHeader, Button, Glyphicon } from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";
import CarosuelImage from "Components/CarosuelImage";
import Cards from "Components/Cards";
import Gmap from "Components/Gmap";
import Footer from "Components/Footer";

const map1 = {
  lat: 19.428911,
  lng: -99.139132
};

function App() {
  return (
    <div>
      <NavBar />
      <Grid className="_mt-50">
        <Row>
          <Col md={12}>
            <CarosuelImage />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageHeader className="text-center">Contacto</PageHeader>
          </Col>
          <Col md={6}>
            <div style={{ height: "350px", width: "100%" }}>
              <Gmap center={map1} zoom={19} />
            </div>
          </Col>
          <Col md={6}>
            <p>
              <strong>Dirección: </strong>
              Mesones No 18 B, Esq.Bolivar, Centro histórico, Ciudad de México.
            </p>
            <p>
              <strong>Telefono: </strong>
              (55) 5709-3840
            </p>
            <p>
              <strong>Correo: </strong>
              <Link target="_blank" href="mailto:mesones18@rjdgalerias.com">
                mesones18@rjdgalerias.com
              </Link>
            </p>
          </Col>
          <Col md={6} xs={12} className="text-center">
            <Button bsStyle="success">
              <a
                href="https://api.whatsapp.com/send?phone=525545689074"
                className="_text-white"
              >
                <Glyphicon glyph="comment" /> Whatsapp 525545689074
              </a>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageHeader className="text-center">
              Conoce nuestras mejores marcas
            </PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Cards
              image="./app/assets/sites/bose.jpg"
              title="Bose"
              url="https://www.bose.mx/es_mx/index.html"
            />
          </Col>
          <Col md={4}>
            <Cards
              image="./app/assets/sites/yamaha.jpeg"
              title="Yamaha"
              url="https://mx.yamaha.com/es/products/audio_visual/index.html"
            />
          </Col>
          <Col md={4}>
            <Cards
              image="./app/assets/sites/peavey.jpg"
              title="Peavey"
              url="https://peavey.com/"
            />
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
