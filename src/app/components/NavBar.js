import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const NavBar = () => (
  <Navbar fixedTop collapseOnSelect className="_bg-primary">
    <Navbar.Header>
      <Navbar.Brand className="_text-white title-navbar">
        <Link to="/">RJD Galerias</Link>
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
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
