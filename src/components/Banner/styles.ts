import styled from "styled-components";
import Logo from '../../assets/imagem_principal.png';

export const Container = styled.div`
    
    background: url(${Logo}) no-repeat bottom center scroll;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    
`;

export const Texto = styled.div`
    position: absolute;
    left: 7.08%;
    right: 45.3%;
    top: 30%;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 80px;
    letter-spacing: -0.015em;

    color: #F5F5F5;

    @media (max-width: 600px){
        @media (min-width: 320px){
            top: 20%;
            font-size: 40px;
            line-height: 50px;
            
        }
    }
`;

export const TextoSecundario = styled.div`
    position: absolute;
    left: 7.08%;
    right: 60%;
    top: 65%;

    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    color: #F5F5F5;

    @media (max-width: 600px){
        @media (min-width: 320px){
            font-size: 20px;
            top: 66%;
            right: 40%;
            line-height: 30px;
        }
    }
`;

export const Botao = styled.div`
    position: absolute;
    left: 7.08%;
    right: 60%;
    top: 80%;

    width: 413px;
    height: 112px;

    @media (max-width: 600px){
        @media (min-width: 320px){
            top: 85%;
            right: 40%;
        }
    }
`;