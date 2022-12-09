import styled from "styled-components";
import Logo from '../../assets/imagem_login.png';

export const Container = styled.div ``;

export const Figura = styled.div `
    background: url(${Logo}) no-repeat bottom center scroll;
    height: 92vh;
    width: 50vw;
    background-size: cover;
`;

export const Quadro = styled.div `
    padding-right: 5%;
    padding-top: 15%;

    .btn{
        width: 100%;
        font-size: 20px;
    }
`;