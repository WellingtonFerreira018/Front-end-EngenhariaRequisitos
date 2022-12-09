import styled from "styled-components";
import Logo from '../../assets/imagme_sec.png';

export const CT = styled.div`
    background: url(${Logo}) no-repeat bottom center scroll;
    height: 100vh;
    width: 100vw;
    background-size: cover;
`;

export const Titulo = styled.div`
    color: white;
    font-weight: 700;
    font-size: 48px;
    padding-top: 18%;
`;

export const Subtitulo = styled.div`
    color: white;
    font-weight: 300;
    padding-bottom: 2%;
`;

export const Alinhar = styled.div`
    padding-top: 5%;

    .btn{
        width: 500px;
    }
`;