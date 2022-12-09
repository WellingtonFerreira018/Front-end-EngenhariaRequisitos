import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Botao } from './styles';
import logo from '../../assets/logo.png';

const Cabecalho = () => {
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
                    <Form className="d-flex">
                        <Link to="/login">
                            <Botao>
                                <Button variant="outline-primary" className='btn'>Entrar</Button>
                            </Botao>
                        </Link>

                        <Link to="/register">
                            <Button variant="outline-primary" active>Registrar</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Cabecalho;