// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';  // Importing user icon
import "./List.css";

const Snavbar = () => {
  const get = localStorage.getItem('user');
  const userName = JSON.parse(get)?.name;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/shome' style={{ color: "white", textDecoration: "none" }}>
            BookStore(Seller)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/shome" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/myproducts" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Myproducts</Link>
            <Link to="/addbook" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Add Books</Link>
            <Link to="/orders" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Orders</Link>
            <Link to="/" style={{ paddingLeft: "10px", paddingTop: "10px", color: "white", textDecoration: "none" }}>Logout</Link>

            {/* User Info and Icon */}
            <div className="user-info" style={{ display: 'flex', alignItems: 'center', color: 'white',marginLeft:'10px' }}>
              <FaUserCircle style={{ marginRight: '10px' }} size={24} />
              <Button variant="link" style={{ color: 'white', padding: '0', fontSize: '18px' }}>
                {userName} {/* Displaying username without brackets */}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Snavbar;
