import { styled } from "styled-components"

export const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.button};
    padding: 10px 18px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 6px;
    border-width: 2px;
    border-color: ${props => props.theme.colors.main.dark};
    cursor: pointer;
    color: ${props => props.theme.colors.lightText};
    pointer-events: auto;
`

export const StyledNavButton = styled(StyledButton)`
    padding: 25px;
    border: none;

    @media screen and (max-width: 768px) {
        padding: 12px;
    }

`

export const DefaultButton = styled(StyledButton)`
    font-size: 30px;
    margin: 10px;
    font-family: 'Montserrat';
    border-radius: 12px;
`

export const ThemeToggleButton = styled(StyledButton)`
    background-color: ${props => props.theme.colors.grayscale.secondary};
    color: ${props => props.theme.colors.grayscale.main};
    border-color: ${props => props.theme.colors.grayscale.main};
`