import WorldMapSvg from "../assets/WorldMapSvg"
import { styled } from "styled-components"
import { ModalContainer } from "../components/styles/Modal.styles"
import { Header2 } from "../components/styles/Text.styles"

const Container = styled(ModalContainer)`
`

const MapContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1100px;
    height: 600px;
    overflow: hidden;
    margin-top: 15px;
`

const HeaderContainer = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
`


const DisplayMap = ({selectedCountry, setShowMap}) => {
  return (
    <Container onClick={() => setShowMap(false)}>
        <MapContainer>
            <WorldMapSvg selectCountry={selectedCountry} />
        </MapContainer>
        <HeaderContainer>
            <Header2>
                Click anywhere to exit
            </Header2>
        </HeaderContainer>
        
    </Container>
  )
}

export default DisplayMap