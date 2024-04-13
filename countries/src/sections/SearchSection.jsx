import { Container } from "../components/styles/Containere.styles"
import { Header2 } from "../components/styles/Text.styles"
import { DefaultButton } from "../components/styles/Button.styles"
import { styled } from "styled-components"

const StyledContainer = styled(Container)`
  color: ${props => props.theme.colors.lightText};
`

const StyledH2 = styled(Header2)`
  color: ${props => props.theme.colors.text};
`

const SearchSection = ({children, startMode, setShowMap}) => {
  return (
    <StyledContainer>
      {startMode && 
        <StyledH2>
          Start typing to search for a country
        </StyledH2>
      }
      
      {children}
      {(!startMode) &&
        <DefaultButton onClick={() => setShowMap(true)}>
          View on map
        </DefaultButton>
      }
    </StyledContainer>
  )
}

export default SearchSection