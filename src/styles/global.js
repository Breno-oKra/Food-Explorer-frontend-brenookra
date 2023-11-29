import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;    
    }
    body{
        background-color:  ${({ theme }) => theme.DARK_400};
        color: ${({ theme }) => theme.LIGHT_100};
        
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.LIGHT_100} ;
    }
    body, input, button, textarea,select{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
        border: none;
    }
    fieldset{
        border: none;
    }
    button,a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        transition: brightness(0.9);
    }
  
`