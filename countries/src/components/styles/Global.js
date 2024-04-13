import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`


    body {
        font-family: 'Montserrat', 'sans-serif';
        background-image: linear-gradient(to bottom right, ${props => props.theme.colors.bg.gradient1}, ${props => props.theme.colors.bg.gradient2});
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        color: ${props => props.theme.colors.text};
        padding: 10px;
    }
`

export default GlobalStyles