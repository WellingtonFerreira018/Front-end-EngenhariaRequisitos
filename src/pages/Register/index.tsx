import React, { useState } from 'react';
import { Container, Figura, Quadro } from './styles';
import NavBar from '../../components/Navbar';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  enderecoId: 1,
  cpf: '', 
  nome: '',
  email: '',
  senha: '',
  telefone: ''
}

const Register: React.FC = () => {

  const [values, setValues] = useState(initialValue);
  const history = useNavigate();

  function onChange(ev: any) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: any){
    ev.preventDefault();

   const data = api.post('usuario', values).then((response) => {
    swal("Cadastro realizado com sucesso", "Realize o seu login", "success");
    history('/login');
  }).catch((response) => {
    swal("Cadastro não efetuado com sucesso", "Verifique seus dados", "error");
  });

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

              <h4>Crie uma conta gratuita!</h4>
              <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome completo:</Form.Label>
                    <Form.Control name='nome' type="text" placeholder="Primeiro Nome" onChange={onChange} required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control name='cpf' type="text" placeholder="CPF" onChange={onChange} required/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Telefone:</Form.Label>
                  <Form.Control name='telefone' type="text" placeholder="(18) 00000-0000" onChange={onChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control name='email' type="email" placeholder="E-mail" onChange={onChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control name='senha' type="password" placeholder="Senha" onChange={onChange} required/>
                </Form.Group>

                <a href='/registerConsultorio'><p>sou proprietario de um consultorio</p></a>
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

export default Register;