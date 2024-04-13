import { useState, useEffect } from 'react'
import { Container } from '../components/styles/Containere.styles'
import { Header } from '../components/styles/Text.styles'
import { Section } from '../components/styles/Section.styles'
import DropdownSearch from '../components/DropdownSearch'
import { styled } from 'styled-components'


const Flag = styled.img`
    border-radius: 10px;
  `

const GameDiv = styled(Section)`
    margin-bottom: 10px;
`

const GameSection = ({data, countryNames, setPlaying, setLastGameData}) => {
    const [level, setLevel] = useState(0)
    const [result, setResult] = useState(0)
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        if (selectedCountry) {
            setSelectedCountry(null)
            let newResult = result
            if (selectedCountry === data[level].name.common) {
                setResult(result + 1)
                newResult++
            }
            if (level === 9) {
                setLastGameData(newResult)
                setLevel(0)
                setResult(0)
                setPlaying(false)
            }
            setLevel(level + 1)
        }
    }, [selectedCountry])

    return (
        <Container>
            <Header>{`${result}/${level}`}</Header>
            <GameDiv>
                <Flag src={data[level].flags.png} />
            </GameDiv>
            <GameDiv>
                <DropdownSearch options={countryNames} setSelectedCountry={setSelectedCountry}/>
            </GameDiv>
        </Container>
    )
}

export default GameSection