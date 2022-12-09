import React from 'react';
import { Grid, Container } from './styles';
import Navbar from '../../components/NavBarDash'
import Mensege from '../../components/Mensege';
import QtdConsulta from '../../components/QtdConsulta';

import RegisterMedico from '../../components/RegisterMedico';
import InfoConsultorio from '../../components/InfoConsultorio';
import MenuConsultorio from '../../components/MenuConsultorio';

const DashboardConsultorio: React.FC = () => {
  
  return (
    <Container>
        <Navbar />
        <Grid>
            <MenuConsultorio />
            <Mensege />
            <InfoConsultorio />
            <QtdConsulta />
            <RegisterMedico />
        </Grid>

    </Container>
  );
}

export default DashboardConsultorio;