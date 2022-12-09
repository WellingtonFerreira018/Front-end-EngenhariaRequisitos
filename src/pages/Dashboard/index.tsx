import React from 'react';
import { Grid, Container } from './styles';
import Navbar from '../../components/NavBarDash'
import Menu from '../../components/Menu';
import Mensege from '../../components/Mensege';
import InfoUsu from '../../components/InfoUsu';
import ConsultaMarcada from '../../components/ConsultaMarcada';
import QtdConsulta from '../../components/QtdConsulta';
//import { useAuth } from '../../api/AuthProvider/useAuth';

const Dashboard: React.FC = () => {
  
  // const auth = useAuth();

  // if(!auth.email){
  //   return(
  //     <h1>não tem ascesso</h1>
  //   );
  // }

  return (
    <Container>
        <Navbar />
        <Grid>
            <Menu />
            <Mensege />
            <InfoUsu />
            <QtdConsulta />
            <ConsultaMarcada />
        </Grid>

    </Container>
  );
}

export default Dashboard;