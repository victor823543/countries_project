import { Header } from "../components/styles/Text.styles";
import { Container } from "../components/styles/Containere.styles";
import { styled } from "styled-components";
import { Divider } from "../components/styles/Divider.styles";

const HeaderContainer = styled(Container)`
    margin-top: 30px;
`

const HeaderSection = () => {
  return (
    <HeaderContainer>
        <Header>
            Learn about countries
        </Header>
        <Divider />
    </HeaderContainer>
  )
}

export default HeaderSection