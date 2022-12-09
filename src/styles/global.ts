import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    html,
    body {
        overflow-x: hidden;
    }

    /*Barra de Rolagem*/
    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background: #e5e4e2;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #d3d3d3;
        border-radius: 20px;
        border: 3px solid #dcdcdc;
    }
`;