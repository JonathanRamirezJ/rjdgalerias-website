import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const NavBar = () => (
  <Navbar fixedTop collapseOnSelect className="_bg-primary">
    <Navbar.Header>
      <Navbar.Brand className="_text-white">
        <Link to="/">RJD-Galerias</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem componentClass="span">
          <Link to="/" className="_text-white">
            Inicio
          </Link>
        </NavItem>
        <NavItem componentClass="span">
          <Link to="/quienes-somos" className="_text-white">
            ¿Quiénes Somos?
          </Link>
        </NavItem>
        <NavItem componentClass="span">
          <Link to="/contacto" className="_text-white">
            Contacto
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
