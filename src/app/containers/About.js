// Third-party dependencies
import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";

function About() {
  return (
    <div>
      <NavBar />
      <Grid className="_mt-50">
        <Row>
          <Col md={12}>
            <PageHeader className="text-center">¿Quiénes Somos?</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col md={12} className="text-center">
            <img
              className="image _img-width _mtb-5"
              alt="img"
              src="./app/assets/wallpaper/fondo04.jpg"
            />
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  );
}

export default About;
