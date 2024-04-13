import { ModalContainer } from "../components/styles/Modal.styles"
import { Section } from "../components/styles/Section.styles"
import { Header, Header2, Paragraph } from "../components/styles/Text.styles"
import { DefaultButton } from "../components/styles/Button.styles"
import { Divider } from "../components/styles/Divider.styles"
import { styled } from "styled-components"

const StartSection = styled(Section)`
    align-items: center;
    padding: 30px;
`

const Container = styled(ModalContainer)`
    z-index: 1;
`

const GameStartPage = ({setPlaying, lastGameData}) => {
  return (
    <Container>
        <StartSection>
            <Header>
                FLAG GAME
            </Header>
            <Paragraph>
                A flag will be displayed and your goal is to pick the corresponding country.
            </Paragraph>

            {lastGameData && 
            <>
                <Divider />
                <Header2>
                    {`LAST RESULT: ${lastGameData}/10`}
                </Header2>
            </>
            }
            
            <DefaultButton onClick={() => setPlaying(true)}>
                START
            </DefaultButton>
            
        </StartSection>
    </Container>
  )
}

export default GameStartPage