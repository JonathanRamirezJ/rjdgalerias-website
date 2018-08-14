import React from "react";
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";

const Footer = () => (
  <div className="footer-custom _bg-primary">
    <Grid>
      <Row>
        <Col md={2} className="text-center">
          <img className="image" alt="img" src="./app/assets/img/logo.jpg" />
        </Col>
        <Col md={6}>
          <h3 className="_text-white">Nosotros:</h3>
          <p className="_text-white">
            Somos la empresa con mayor cantidad de productos de alta calidad,
            nos especializamos en instrumentos musicales, audio profesional y
            residencial.
          </p>
        </Col>
        <Col md={4}>
          <h3 className="_text-white">Contáctanos:</h3>
          <ul className="list _text-white">
            <li>
              <a
                href="https://www.facebook.com/RJDGalerias/"
                className="_text-white"
              >
                <Glyphicon glyph="thumbs-up" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=525526637907"
                className="_text-white"
              >
                <Glyphicon glyph="comment" /> Whats Mesones 18
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=525545689074"
                className="_text-white"
              >
                <Glyphicon glyph="comment" /> Whats Mesones 18A
              </a>
            </li>
            <li>
              <a
                href="mailto:mesones18@rjdgalerias.com"
                className="_text-white"
              >
                <Glyphicon glyph="envelope" /> Correo Electrónico
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12}>
          <span className="copyright _text-white">
            Developer ®{" "}
            <a
              className="_text-white"
              href="https://github.com/jonathanramirezj/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Jonathan Ramirez
            </a>
          </span>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Footer;
