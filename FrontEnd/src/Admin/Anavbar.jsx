// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'; // Importing the user icon

const Anavbar = () => {
  const get = localStorage.getItem('user');
  const username = JSON.parse(get)?.name || "Guest"; // Fallback to "Guest" if no user

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/shome' style={{ color: "white", textDecoration: "none" }}>
            BookStore(Admin)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ahome" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/users" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Users</Link>
            <Link to="/sellers" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Sellers</Link>
            <Link to="/" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Logout</Link>

            {/* Username and User Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#333',
              borderRadius: '5px',
              padding: '5px 10px',
              marginLeft: '10px',
              color: 'white'
            }}>
              <FaUserCircle style={{ marginRight: '10px', fontSize: '20px' }} />
              <span>{username}</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anavbar;
