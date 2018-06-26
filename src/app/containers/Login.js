// Third-party dependencies
import React from "react";
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Form,
  FormControl,
  FormGroup,
  Checkbox,
  Button,
  ControlLabel
} from "react-bootstrap";

// Own actions/constants/components
import NavBar from "Components/NavBar";

function Login() {
  return (
    <Grid className="_mt-50">
      <Row>
        <Col md={12}>
          <NavBar />
        </Col>
        <Col md={12}>
          <PageHeader className="text-center">Login</PageHeader>
        </Col>
        <Col md={12}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>;
        </Col>
      </Row>
    </Grid>
  );
}

export default Login;
