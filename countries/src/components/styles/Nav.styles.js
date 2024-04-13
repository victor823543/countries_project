import { styled } from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: fixed;
    width: 100vw;
    top: 12px;
    right: 12px;
    z-index: 50;
    pointer-events: none;
`

export const NavUl = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const NavLi = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: ${props => props.theme.colors.lightText};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.default};
        transform: scale(1.25);
        transition-duration: 200ms;
    }
`