import { Container } from "../components/styles/Containere.styles"
import { Section } from "../components/styles/Section.styles"
import TextDivider from "../components/TextDivider"
import { styled } from "styled-components"
import { Paragraph, Header2 } from "../components/styles/Text.styles"
import { StyledButton } from "../components/styles/Button.styles"
import {useNavigate} from 'react-router-dom'

const ChoseContainer = styled(Container)`
  flex-direction: row;
  position: relative;
  gap: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const ChooseSection = styled(Section)`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  &:hover {
    background-color: ${props => props.theme.colors.sectionHover};
    transform: scale(1.1);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`

const ChoseSection = () => {
  const navigate = useNavigate()

  return (
    <ChoseContainer>
      <ChooseSection onClick={() => navigate('/search')}>
        <Header2>
          Search
        </Header2>
        <Paragraph>
          Search for countries and receive useful information.
        </Paragraph>
      </ChooseSection>
      <ChooseSection onClick={() => navigate('/game')}>
        <Header2>
          Play
        </Header2>
        <Paragraph>
          Play a game where you guess the country by its flag.
        </Paragraph>
      </ChooseSection>
      <TextDivider>
        OR
      </TextDivider>
    </ChoseContainer>
  )
}

export default ChoseSection