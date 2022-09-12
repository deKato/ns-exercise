import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
input, label {
    display:block;
}

body {
    margin: 0;
    height: 100vh;
    font-family: Roboto, Helvetica, sans-serif;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
 
    50% {
        background-position: 100% 50%;
    }
 
    100% {
        background-position: 0% 50%;
    }
}`;
