import React, { useState } from 'react';
import { Container, Figura, Quadro } from './styles';
import NavBar from '../../components/Navbar';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../services/api';

const initialValue = {
  nomeRua: "",
  numero: "",
  bairro: " ",
  complemento: "",
  cep: "",
  cidade: "",
  pais: ""
}

const RegisterConsultorio: React.FC = () => {

  const [values, setValues] = useState(initialValue);

  function onChange(ev: any) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: any){
    ev.preventDefault();

   const data = api.post('endereco', values).then(data => data.data)

    console.log(data);
    return data;
  }
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Figura>
            </Figura>
          </Col>
          <Col>
            <Quadro>

              <h4>Cadastre seu consultório!</h4>
              <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome consutório: </Form.Label>
                    <Form.Control name='nome' type="text" placeholder="Nome consultorio" onChange={onChange} required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control name='telefone' type="text" placeholder="Telefone" onChange={onChange} required/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control name='email' type="email" placeholder="E-mail" onChange={onChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control name='senha' type="password" placeholder="Senha" onChange={onChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label><h6>Endereço</h6></Form.Label>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome rua: </Form.Label>
                    <Form.Control name='nomeRua' type="text" placeholder="Nome da rua" onChange={onChange} required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Numero:</Form.Label>
                    <Form.Control name='numero' type="text" placeholder="Numero" onChange={onChange} required/>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Bairo: </Form.Label>
                    <Form.Control name='bairro' type="text" placeholder="Nome do bairro" onChange={onChange} required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control name='cep' type="text" placeholder="Numero CEP" onChange={onChange} required/>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control name='cidade' type="text" placeholder="Nome da cidade" onChange={onChange} required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pais:</Form.Label>
                    <Form.Control name='pais' type="text" placeholder="Nome pais" onChange={onChange} required/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Complemento:</Form.Label>
                  <Form.Control name='complemento' type="text" placeholder="Complemento" onChange={onChange} required/>
                </Form.Group>

                <Button variant="primary" type='submit' className='btn'>
                  Registrar
                </Button>
              </Form>
            </Quadro>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterConsultorio;