import React, { useEffect, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { AuthContext } from './AuthContext';

function NavBar() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
  }, [user]);

  return (
    <Navbar expand="lg" className="justify-content-center">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="justify-content-center">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/nature'>Nature</Nav.Link>
            <Nav.Link as={Link} to='/food'>Food</Nav.Link>
            <Nav.Link as={Link} to='/travel'>Travel</Nav.Link>
            <Nav.Link as={Link} to='/news'>News</Nav.Link>
            <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            {
            user?.role === 'admin' && <Nav.Link as={Link} to='/users'>Users</Nav.Link> // küsimärk vajalik, et enne sisselogimist väärtust pole ja ei tekiks errorit
            }
            {user ? (
              <>
              {/* <p>{user.email}</p> */}
              <p className="nav-text">{user.email}</p>
              <p className="nav-text">Role: {user.role}</p>
              <Logout />
              </>
            ) : (
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
