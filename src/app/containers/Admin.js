// Third-party dependencies
import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";

function Admin() {
  return (
    <Grid className="_mt-50">
      <Row>
        <Col md={12}>
          <NavBar />
        </Col>
        <Col md={12}>
          <PageHeader className="text-center">Administrador</PageHeader>
        </Col>
      </Row>
    </Grid>
  );
}

export default Admin;
