import { createGlobalStyle } from "styled-components";


export const MainStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }
    body{
        background-color: #FFFFFF;
    }
    a{
        text-decoration: none;
    }
    button{
        background-color: transparent;
        border: none;
        outline: none;
    }
` 