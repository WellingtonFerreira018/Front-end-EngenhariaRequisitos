import styled from "styled-components";

// ME = menu
// IF = Bem vindo
// DT = detalhes do usuario
// QC = qtd de consultas
// CM = consultas marcadas

export const Container = styled.div`
    background-color: #2b58de;
    background-image: linear-gradient(to right, #1d44b8, transparent, #839deb);
    height: 100vh;
`;

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 22% 42% 35%;
    grid-template-rows: 15% 28% 385px;

    grid-template-areas: 
    'ME IF IF'
    'ME DT QC'
    'ME CM CM'
    ;
`;