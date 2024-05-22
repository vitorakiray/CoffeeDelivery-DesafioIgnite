import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

    button {
        border: none;
        cursor: pointer;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']}
    }

    border-style, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }

    h1 {
        font-family: "Baloo 2", sans-serif; 
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']}
    }

    h2 {
        font-family: "Baloo 2", sans-serif; 
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']}
    }

    h3 {
        font-family: "Baloo 2", sans-serif; 
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']}
    }

    h4 {
        font-family: "Baloo 2", sans-serif; 
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']}
    }

    .titleXs {
        font-family: "Baloo 2", sans-serif; 
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']}
    }

    .textL {
        font-family: "Roboto", sans-serif; 
        font-size: 1.25rem;
        line-height: 130%;
    }

    .textM {
        font-family: "Roboto", sans-serif; 
        font-size: 1rem;
        line-height: 130%;
    }

    .textS {
        font-family: "Roboto", sans-serif; 
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
    }

    .buttonG {
        font-family: "Roboto", sans-serif; 
        font-weight: 700;
        font-size: 0.875rem;
        
    }

    .buttonS {
        font-family: "Roboto", sans-serif; 
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
    }

`
