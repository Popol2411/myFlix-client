import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export function NavbarView({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar className="main-nav" sticky="top" expand="lg" variant="dark">

      <Container>

        <Navbar.Brand className="navbar-logo" href="/">My Flix Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && (
              <Nav.Link href="/users/${user}">My Profile</Nav.Link>
            )}
            {isAuth() && (
              <Button variant="link" onClick={() => {
                onLoggedOut()
              }}>Logout</Button>
            )}
            {!isAuth() && (
              <Nav.Link href="/">Login</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href="/register">Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}