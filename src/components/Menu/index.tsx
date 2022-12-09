import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container, Separador, TextM, ItemM } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
        <Row>
            <Col><TextM>Menu</TextM></Col>
        </Row>
        <Row>
            <Col><Separador /></Col>
            <Col><ItemM>Consultas marcadas</ItemM></Col>
        </Row>
        <Row>
            <Col><Separador /></Col>
            <Col><ItemM>Alterar dados</ItemM></Col>
        </Row>
        <Row>
            <Col><Separador /></Col>
            <Col><ItemM>Preferências</ItemM></Col>
        </Row>
    </Container>
  );
}

export default Menu;