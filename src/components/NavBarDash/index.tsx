import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Navbardash = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Link to="/">
                    <Navbar.Brand><img alt='' src={logo} /></Navbar.Brand>
                </Link>
                <Navbar.Brand href="/">MedCover</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbardash;