import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container, Text } from './styles';
import img from '../../assets/consultorio.png';

const InfoConsultorio: React.FC = () => {

  return (
    <Container>
      <Row>
        <Text>
        <Col xs={3}>
          <img alt='' src={img} />
        </Col>
          <Col xs={4}>
            <Row>
              <Col>Nome do consultorio:</Col>
            </Row>
            <Row>
              <Col>Endereço:</Col>
            </Row>
            <Row>
              <Col>E-mail:</Col>
            </Row>
            <Row>
              <Col>Telefone:</Col>
            </Row>
          </Col>

          <Col xs={5}>
          <Row>
              <Col>Mais Saúde</Col>
            </Row>
            <Row>
              <Col>Av. Cuiabá, 399 - Centro</Col>
            </Row>
            <Row>
              <Col>consultorio@gmail.com</Col>
            </Row>
            <Row>
              <Col>(45) 12345-6789</Col>
            </Row>
          </Col>
        </Text>
      </Row>
        
    </Container>
  );
}

export default InfoConsultorio;