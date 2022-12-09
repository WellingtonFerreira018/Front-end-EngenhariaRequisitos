import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Container, Text } from './styles';
import img from '../../assets/dados-do-usuario.png';
import getUser from '../../api/user.api';
import { IUser } from '../../interfaces/Iuser';

const InfoUsu: React.FC = () => {

  const [user, setUser] = useState<IUser>();

  async function chamadaUsuario(){
    const data = await getUser(3);
    setUser(data);
  }

  return (
    <Container>
      <Row>
        <Text>
        <Col xs={4}>
          <img alt='' src={img} />
        </Col>
          <Col xs={4}>
            <Row>
              <Col>Nome:</Col>
            </Row>
            <Row>
              <Col>Data de Inscrição:</Col>
            </Row>
            <Row>
              <Col>Status do paciente:</Col>
            </Row>
          </Col>

          <Col xs={4}>
          <Row>
              <Col>Felipe Lapa</Col>
            </Row>
            <Row>
              <Col>00/00/0000</Col>
            </Row>
            <Row>
              <Col>Em espera</Col>
            </Row>
          </Col>
        </Text>
      </Row>
        
    </Container>
  );
}

export default InfoUsu;