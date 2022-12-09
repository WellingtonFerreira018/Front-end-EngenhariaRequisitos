import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Instrucoes from '../../components/Instrucoes';
import Agendar from '../../components/Agendar';
import Rodape from '../../components/Rodape';

const Main: React.FC = () => {
  return (
    <Container>
        <Navbar />
        <Banner />
        <Instrucoes />
        <Agendar />
        <Rodape />
    </Container>
  );
}

export default Main;