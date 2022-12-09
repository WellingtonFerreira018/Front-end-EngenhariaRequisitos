import React, { useState } from 'react';
import { Container, Figura, Quadro } from './styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import { Col, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../services/api';

const initialValue = {
  email: '',
  senha: '',
}

const Login: React.FC = () => {

  const [values, setValues] = useState(initialValue);
  const history = useNavigate();

  function onChange(ev: any) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: any) {
    ev.preventDefault();

    const data = api.post('usuario/login', values).then((response) => {
      swal("Login realizado com sucesso", "Painel de controle", "success");
      if(values.email === "admin@gmail.com"){
        history('/dashboard');
      }else{
        history('/');
      }
    }).catch((response) => {
      swal("Login não encontrado", "Verefique seu senha ou e-mail", "error");
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

              <h4>Entre na sua Conta!</h4>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control name='email' type="email" placeholder="E-mail" onChange={onChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control name='senha' type="password" placeholder="Senha" onChange={onChange} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Entrar !
                </Button>
              </Form>
            </Quadro>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;