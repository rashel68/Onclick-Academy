import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }
    return (

        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>Onclick Academy</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link><Link to="/home" style={linkStyle}>Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/services" style={linkStyle}>Services</Link></Nav.Link>
                    <Nav.Link ><Link to="/mentors" style={linkStyle}>Our Mentors</Link></Nav.Link>
                    <Nav.Link><Link to="/about" style={linkStyle}>About Us</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;
