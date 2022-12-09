import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Container } from './styles';

const RegisterMedico: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h4>Cadastre o Médico</h4>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control name='nome' type="text" placeholder="Nome Completo" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>CRM:</Form.Label>
                                <Form.Control name='CRM' type="text" placeholder="CRM" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control name='email' type="text" placeholder="E-mail" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Senha:</Form.Label>
                                <Form.Control name='CRM' type="text" placeholder="Senha" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Especialização:</Form.Label>
                                <Form.Control name='esp' type="text" placeholder="Especialização" required />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit" className='btn'>
                            Cadastrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterMedico;