import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    background-color: #FFF;
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
  }

  h1,h2,h3{
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    line-height: 130%;
  }
  
  h1{
    font-size: 3rem;
    font-weight: 800;
  }
  
  h2{
    font-size: 2rem;
    font-weight: 800;
  }

  h3{
    font-size: 1.25rem;
  }
`
