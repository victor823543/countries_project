import useFetchData from "../hooks/useFetchData"
import { Container, InfoContainer} from "../components/styles/Containere.styles"
import InfoBox from "../components/InfoBox"
import { Header2 } from "../components/styles/Text.styles"
import { useMemo, useState, useEffect } from "react"
import { styled } from "styled-components"
import { Palette } from 'color-thief-react'
import { getSortedInfo } from "../utils/functions"


  const DisplayContainer = styled(Container)`
    color: ${props => props.theme.colors.lightText};
  `

  const Flag = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%);
    z-index: -5;
    border-radius: 10px;
    opacity: 0.8;
    height: 300px;
  `

  const BackgroundImage = styled.div`
    background-image: ${props => props.bg};
    background-size: cover;
    inset: 0px;
    position: fixed;
    z-index: -10;
    min-height: 110%;
  `


const DisplaySection = ({country, setCountryId}) => {
  const queryParams = useMemo(() => ({ fullText: true }), [])
  const {data, loading, error} = useFetchData(`/name/${country}`, queryParams, country ? true : false)
  const [sortedInfo, setSortedInfo] = useState(null)

  useEffect(() => {
    if (data) {
      const countryId = data?.[0]['cca2']
      console.log(countryId)
      setCountryId(countryId.toLowerCase())
      setSortedInfo(getSortedInfo(data[0]))
    }
  }, [data])

  return (
    <DisplayContainer>
      {data &&
        <>
          <Palette src={data?.[0].flags.png} crossOrigin='anonymous' format='hslArray' colorCount={2}>
                {({data, loading}) => {
                    
                    if (loading || !data) return <div>Loading...</div>;
                    else { 
                        const gradient = `linear-gradient(to bottom right, hsl(${data[0][0]}, ${data[0][1]}%, ${data[0][2]}%), hsla(${data[1][0]}, ${data[1][1]}%, ${data[1][2]}%))`
                        const darkGradient = `linear-gradient(to bottom right, hsl(${data[0][0]}, ${data[0][1]}%, ${data[0][2] - 10}%), hsl(${data[1][0]}, ${data[1][1]}%, ${data[1][2]-10}%))`
                        return ( 
                            <BackgroundImage bg={gradient}></BackgroundImage>
                        ) }}}
            </Palette>
          <Header2>
            {data?.[0].name.common}
          </Header2>
          <Flag src={data?.[0].flags.png} alt="flag"/>
          <InfoContainer>
            {sortedInfo && sortedInfo.map((obj) => Object.entries(obj).map(([title, info]) =>
              <InfoBox title={title} info={info} key={title}/>
            ))}
          </InfoContainer>
        </>
        
      }
      
    </DisplayContainer>
  )
}

export default DisplaySection