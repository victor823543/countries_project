import { styled } from "styled-components"

export const Divider = styled.div`
    border-top-style: solid;
    border-top-color: ${props => props.theme.colors.main.dark};
    border-top-width: 2px;
    margin: 0 10px;
    width: 75%;
`