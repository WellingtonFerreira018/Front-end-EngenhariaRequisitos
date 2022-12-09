import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Texto } from './styles';

const Rodape: React.FC = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Texto>MedCover</Texto>
            </Col>

            <Col>
                <Texto>Desenvolvido por Wellington Ferreira e Felipe Lapa</Texto>
            </Col>
        </Row>
    </Container>
  );
}

export default Rodape;