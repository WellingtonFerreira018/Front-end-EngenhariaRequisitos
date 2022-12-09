import React from 'react';
import { Button, Col, Container, DropdownButton, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import swal from 'sweetalert';
import { CT, Titulo, Subtitulo, Alinhar } from './styles';

const Agendar: React.FC = () => {

    return (
        <CT>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Titulo>Agende a sua consulta!</Titulo>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Subtitulo>Escolha a especialidade do médico e a sua região.</Subtitulo>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <DropdownButton title="Especialidade    " size='lg'>
                            <DropdownItem>Cardiologista</DropdownItem>
                            <DropdownItem>Clinico Geral</DropdownItem>
                            <DropdownItem>Neurologista</DropdownItem>
                        </DropdownButton>
                    </Col>

                    <Col xs={6}>
                        <DropdownButton title="Região   " size='lg'>
                            <DropdownItem href="">São Paulo </DropdownItem>
                            <DropdownItem href="">Santa Catarina</DropdownItem>
                            <DropdownItem href="">Paraná</DropdownItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Alinhar>
                            <Button variant='primary' 
                                    size='lg' 
                                    className='btn' 
                                    onClick={(e) => swal({title: "Não é possivel realizar o agendamento de uma consulta",
                                                            text: "Realize o login para agendar sua consulta",
                                                            icon: "warning"
                                                        })}
                                    href='/login'
                                    >
                                    Buscar
                            </Button>
                        </Alinhar>
                    </Col>
                </Row>
            </Container>
        </CT>
    );
}

export default Agendar;