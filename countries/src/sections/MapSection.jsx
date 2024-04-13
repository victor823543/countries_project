import { styled } from "styled-components"
import { Container } from "../components/styles/Containere.styles"
import WorldMapSvg from "../assets/WorldMapSvg"

const Map = styled.object`
    height: 300px;

`
const MapContainer = styled.div`
    width: 550px;
    height: 300px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`

const SvgMap = styled.svg`
    
`

const MapSection = () => {
  return (
    <MapContainer>
        <WorldMapSvg scaleDown={true}/>
        
    </MapContainer>
  )
}

export default MapSection