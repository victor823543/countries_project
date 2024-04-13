import { styled } from "styled-components"
export const Section = styled.section`
    padding: 10px 15px;
    background-color: ${props => props.theme.colors.section};
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: 4;
    box-sizing: border-box;
`