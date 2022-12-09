import React, { useState } from 'react';
import { Accordion, Col, Dropdown, DropdownButton, Form, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css';
import api from '../../services/api';

import { Container, Titulo, Consulta, Alinhar } from './styles';

const initialValue = {
  usuarioId: 3,
  consultorioId: 1,
  medicoId: 1,
  diagnostico: '',
  receita: ''
}

const ConsultaMarcada: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isOpen, setIsOpen] = useState(false)


  const [values, setValues] = useState(initialValue);

  function onChange(ev: any) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: any) {
    ev.preventDefault();

    const data = api.post('consulta', values).then(data => data.data)

    console.log(data);
    return data;
  }
  

  return (
    <Container>

      <Titulo>Consultas Marcadas</Titulo>

      <Consulta>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Consulta com Neurologista</Accordion.Header>
                <Accordion.Body>
                  <p>Nome do profissional: Dr Wellington</p>
                  <p>Área de consulta: Neurologista</p>
                  <p>Data da Consulta: 00/00/0000</p>
                  <p>Horario da consulta: 00:00</p>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Consulta>

      <Row>
        <Col>
          <Alinhar>
            <Button variant='primary' onClick={handleShow}>
              Marcar consulta
            </Button>
          </Alinhar>

          <Modal size='lg' show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Marcar consulta</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nome do Médico:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dr. Wellington"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm">
                  <Form.Label>Especialidade do Médico:</Form.Label>
                  <DropdownButton id="dropdown-basic-button" title="Especialidade  " onChange={onChange}>
                    <Dropdown.Item href="#/action-1">Cardiologista</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Neurologista</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Clinico Geral</Dropdown.Item>
                  </DropdownButton>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm">
                  <Form.Label>Datas disponiveis:</Form.Label>
                  <Button
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  >
                    Ver datas
                  </Button>
                  <DatePicker
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    defaultValue={new Date(2022, 8, 8)}
                    minDate={new Date(2022, 11, 1)}
                    maxDate={new Date(2023, 0, 10)}
                    headerFormat='DD, MM dd'
                    title='Selecione uma data'
                    closeText='Sair'
                    clearText='Limpar'
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Observações:</Form.Label>
                  <Form.Control as="textarea" name='receita' rows={3} onChange={onChange} />
                </Form.Group>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Fechar
                </Button>
                <Button variant="success" type='submit'>
                  Concluir
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Col>
      </Row>

    </Container >
  );
}

export default ConsultaMarcada;