import React from 'react'
import HeaderSection from '../sections/HeaderSection'
import MapSection from '../sections/MapSection'
import ChoseSection from '../sections/ChooseSection'
import { styled } from 'styled-components'

const MapContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const StartPage = () => {
  return (
    <>
      <HeaderSection />
      <MapContainer>
        <MapSection />
      </MapContainer>
      <ChoseSection />
    </>
  )
}

export default StartPage