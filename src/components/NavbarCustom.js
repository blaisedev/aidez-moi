import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./d.css"

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="logo">
              <span style={ {color: 'blue'}}>AI</span><span style={ {color: 'white'}}>D</span><span style={ {color: 'red'}}>EZ</span>
              <span style={ {color: 'black'}}>-</span>
              <span style={ {color: 'green'}}>M</span><span style={ {color: 'white'}}>O</span><span style={ {color: 'orange'}}>I</span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <LinkContainer to="/about">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>

            {/*<LinkContainer to="/contact">*/}
              {/*<Nav.Link active={false}>Contact</Nav.Link>*/}
            {/*</LinkContainer>*/}

            {/*<LinkContainer to="/pricing">*/}
              {/*<Nav.Link active={false}>Pricing</Nav.Link>*/}
          {/*</LinkContainer>*/}

              <LinkContainer to="/testimonial">
                  <Nav.Link active={false}>Testimonials</Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
