import { Section } from "./styles/Section.styles"
import { Header3, Paragraph } from "./styles/Text.styles"
import { styled } from "styled-components"

const InfoContainer = styled(Section)`
  gap: 0;
`

const InfoBox = ({title, info}) => {
  return (
      <InfoContainer>
        <Header3>
            {title}
        </Header3>
        <Paragraph>
            {info.map((info) => 
              <>
                {info}
                <br />
              </>
            )}
        </Paragraph>
        
      </InfoContainer>
    
  )
}

export default InfoBox