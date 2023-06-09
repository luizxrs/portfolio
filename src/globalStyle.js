import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        
        scroll-behavior: smooth;
        transition: all .5s cubic-bezier(.175,.885,.32,1);
        ::selection {
            background-color: #774cf0;
            color: white;
        }
    }

    :root {
        font-size: 40%;


    @media only screen and (min-width: 4000px) {
            font-size: 150%;
    }

    @media (min-width: 3001px) and (max-width: 4000px) {
            font-size: 130%;
    }

    @media (min-width: 2021px) and (max-width: 3000px) {
            font-size: 100%;
    }
    
    @media (min-width: 1920px) and (max-width: 2020px) {
            font-size: 65%;
    }

    @media (min-width: 1440px) and (max-width: 1919px) {
            font-size: 55%;
    }
    
    @media (min-width: 1024px) and (max-width: 1439px) {
            font-size: 45%;
    }
    
    @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 40%;
    }


    @media (min-width: 430px) and (max-width: 767px) {
            font-size: 40%;
    }
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
        height: 100%;
        background: radial-gradient(102.78% 101.5% at 0% -1.5%, #3A1E60 0%, #140826 33.85%, #291349 61.98%, #140826 100%) 
    }

    h1 {   
        font-size: 6rem;
        margin: 0;
        font-weight: 400;
    }
    h2 {   
        font-size: 2.8rem;
        margin: 0;
        font-weight: 400;
    }
    h3 {   
        font-size: 2rem;
        margin: 0;
        font-weight: 400;
    }
    h4 {   
        font-size: 1.8rem;
        margin: 0;
        font-weight: 400;
    }
    h5 {   
        font-size: 1.4rem;
        margin: 0;
        font-weight: 400;
    }
    h6 {   
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
    }

    p {
        font-size: 1.6rem;
    }

`;

export default GlobalStyle;
