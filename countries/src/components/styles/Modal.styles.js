import { styled } from "styled-components"

export const ModalContainer = styled.div`
    position: fixed;
    inset: 0px;
    background-size: cover;
    background-color: ${props => props.theme.colors.modal.container};
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 20;
`
