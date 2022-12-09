import React from 'react';
import { Container, Texto, TextoSecundario, Botao} from './styles';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (

        <Container>
            <Texto>O serviço que ajudou milhões de pessoas na pandemia.</Texto>
            <TextoSecundario>Agende agora uma consulta com o médico mais próximo de você!</TextoSecundario>
            <Botao><Button variant="primary" size='lg'>Agendar Consulta</Button>{' '}</Botao>
        </Container>

    );
}

export default Banner;