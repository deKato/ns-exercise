import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
input, label {
    display:block;
}

body {
    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite; */
    overflow-y: hidden;
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
