import React from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <NavBar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavBar.Brand>Charts</NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-Navbar-nav" />
          <NavBar.Collapse id="basic-NavBar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home/bar">Bar</Nav.Link>
              <Nav.Link href="/home/line">Line</Nav.Link>
              <Nav.Link href="/home/pie">Pie</Nav.Link>
              <Nav.Link href="/home/scatter">Scatter Plot</Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
}
