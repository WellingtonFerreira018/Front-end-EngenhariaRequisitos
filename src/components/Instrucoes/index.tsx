import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CT, Titulo, Subtitulo, Conteudo } from './styles';

const Instrucoes: React.FC = () => {
    return (
        <CT>
            <Container>
                <Row>
                    <Col xs={12}><Titulo>Encontre médicos da sua região!</Titulo></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Subtitulo>Passo 1</Subtitulo>
                        <Conteudo>Navegue até a área de procura de médicos e comece a busca, certificando-se de selecionar a especialidade do médico e a sua região.</Conteudo>
                    </Col>
                    <Col xs={6}>
                        <Subtitulo>Passo 2</Subtitulo>
                        <Conteudo>Encontrou um médico de seu interesse? Que bom! Agora basta se cadastrar no site, caso já tenha uma conta, entre e marque a consulta.</Conteudo>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Subtitulo>Passo 3</Subtitulo>
                        <Conteudo>Para marcar a consulta dentro do site é rápido e simples. No painel de consultas da sua conta, selecione o médico e agende a consulta.</Conteudo>
                    </Col>
                    <Col xs={6}>
                        <Subtitulo>Passo 4</Subtitulo>
                        <Conteudo>O pagamento da consulta será realizado no consultório do médico desejado, então não se preocupe em pagar no momento.</Conteudo>
                    </Col>
                </Row>
            </Container>
        </CT>

    );
}

export default Instrucoes;