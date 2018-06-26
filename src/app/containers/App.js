// Third-party dependencies
import React from "react";
import { Grid, Row, Col, PageHeader, Alert } from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";
import CarosuelImage from "Components/CarosuelImage";
import Cards from "Components/Cards";
import Footer from "Components/Footer";

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
        <br />
        <Row>
          <Col md={12}>
            <Alert bsStyle="warning">
              <strong>Aviso importante! </strong>
              SALVADOR 29A: CERRADO POR REMODELACION, LO ESTAREMOS ATENDIENDO
              EN: MESONES NO. 18, ESQUINA CON BOLIVAR, ATENTAMENTE: ESPACIO
              MUSICAL RJD.
            </Alert>
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
