import React from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { Container, Alinhar } from './styles';

const QtdConsulta: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Quantidade de consultas marcadas para hoje:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alinhar>

            <ListGroup as='ol'>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Drª Wellington Ferreira</div>
                  Cardiologista
                </div>
                <Badge bg="primary" pill>
                  3 consultas
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Alinhar>
        </Col>
      </Row>
    </Container>
  );
}

export default QtdConsulta;