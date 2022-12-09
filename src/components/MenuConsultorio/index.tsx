import React, { useState } from 'react';
import { Badge, Col, ListGroup, Modal, Row } from 'react-bootstrap';
import { Container, Separador, TextM, ItemM } from './styles';

const MenuConsultorio: React.FC = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <Container>
            <Row>
                <Col><TextM>Menu</TextM></Col>
            </Row>
            <Row>
                <Col><Separador /></Col>
                <Col><ItemM onClick={handleShow2}>Consultas marcadas</ItemM></Col>
            </Row>
            <Row>
                <Col><Separador /></Col>
                <Col><ItemM>Alterar dados</ItemM></Col>
            </Row>
            <Row>
                <Col><Separador /></Col>
                <Col><ItemM onClick={handleShow}>Lista de Médicos</ItemM></Col>
            </Row>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Lista de Médicos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as='ol'>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Drª Wellington Ferreira</div>
                                Cardiologista
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Drª Felipe Lapa</div>
                                Neurologista
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Drª Erik Henrique</div>
                                Nutricionista
                            </div>
                        </ListGroup.Item>

                    </ListGroup>
                </Modal.Body>
            </Modal>

            <Modal size='lg' show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Consultas Marcadas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as='ol'>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                           <div className="ms-2 me-auto">
                                <div className="fw-bold">Wellington Ferreira</div>
                                Consulta com o Drª Wellington Ferreira
                            </div>
                            <Badge bg="primary" pill>
                                10/12/2022
                            </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Wellington Ferreira</div>
                                Consulta com o Drª Wellington Ferreira
                            </div>
                            <Badge bg="primary" pill>
                                11/12/2022
                            </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Wellington Ferreira</div>
                                Consulta com o Drª Wellington Ferreira
                            </div>
                            <Badge bg="primary" pill>
                                12/12/2022
                            </Badge>
                        </ListGroup.Item>

                    </ListGroup>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default MenuConsultorio;