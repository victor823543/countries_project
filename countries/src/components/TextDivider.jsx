import { styled } from "styled-components"

const Divider = styled.div`
    border-left-style: solid;
    border-left-color: ${props => props.theme.colors.main.dark};
    border-left-width: 2px;
    flex: 1 1 0%;

    @media screen and (max-width: 768px) {
        border-left: none;
        border-top-style: solid;
        border-top-color: ${props => props.theme.colors.main.dark};
        border-top-width: 2px;

    }
`

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        height: auto;
        width: 90%;
    }
`

const Text = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin: 0 10px;
`

const TextDivider = ({children}) => {
  return (
    <Container>
        <Divider />
            <Text>
                {children}
            </Text>
        <Divider />
    </Container>
  )
}

export default TextDivider