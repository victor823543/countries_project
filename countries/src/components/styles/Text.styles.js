import { styled } from "styled-components"

export const Header = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 60px;
    width: 60%;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 38px;
        width: 90%;
    }
`

export const Header2 = styled.h2`
    font-weight: 300;
    font-size: 42px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
`

export const Header3 = styled.h3`
    font-weight: 300;
    font-size: 32px;
    text-align: center;
    margin-bottom: 8px;
`

export const Paragraph = styled.p`
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`