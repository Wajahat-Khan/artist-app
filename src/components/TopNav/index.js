import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/passengers" active={window.location.pathname==="/passengers"}>Passengers</Nav.Link>
              <Nav.Link as={Link} to="/airlines" active={window.location.pathname==="/airlines"}>Airlines</Nav.Link>
              <Nav.Link as={Link} to="/settings" active={window.location.pathname==="/settings"}>Settings</Nav.Link>
            </Nav>
        </Navbar>
      </>
    );
  }
}

export default TopNav;
