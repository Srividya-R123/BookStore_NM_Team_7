import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './uhome.css'; // Assuming your CSS file is named Navbar.css
import { FaCircleUser } from "react-icons/fa6";

const Unavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    
<Navbar className="navbar" expand="lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/uhome" className="brand-link">
            BookEase
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-links ml-auto">
            <Link to="/uhome" className="nav-link">Home</Link>
            <Link to="/uproducts" className="nav-link">Books</Link>
            <Link to="/wishlist" className="nav-link">Wishlist</Link>
            <Link to="/myorders" className="nav-link">My Orders</Link>
            <Link to="/" className="nav-link">Logout</Link>
            {user && (
              <div className='name'>
                <FaCircleUser
                  style={{
                    width: '25px',
                    height: '25px',
                    paddingTop: '2px',
                    paddingBottom: '2px',
                  }}
                />
                <h5>{user.name}</h5>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
