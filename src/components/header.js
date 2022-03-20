import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Bloggy</Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/link">
                <Nav.Link>Link</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
