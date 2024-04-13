import { useState, useEffect, useMemo } from 'react'
import useFetchData from '../hooks/useFetchData'
import GameStartPage from '../sections/GameStartPage'
import GameSection from '../sections/GameSection'
import { getRandomItems, getNameList } from '../utils/functions'

const GamePage = () => {
  const queryParams = useMemo(() => ({ fields: 'name,flags' }), [])

  const {data, loading, error} = useFetchData('all', queryParams)
  const [playing, setPlaying] = useState(false)
  const [sortedData, setSortedData] = useState(null)
  const [countryNames, setCountryNames] = useState(null)
  const [lastGameData, setLastGameData] = useState(null)
 

  useEffect(() => {
    if (data) {
      setSortedData(getRandomItems(data, 10))
      setCountryNames(getNameList(data))
    }

  }, [data])

  return (
    <>
      {(playing && !loading) && 
        <GameSection data={sortedData} countryNames={countryNames} setPlaying={setPlaying} setLastGameData={setLastGameData}/>
      }
      {!playing && 
        <GameStartPage setPlaying={setPlaying} lastGameData={lastGameData}/>
      }
    </>
    
  )
}

export default GamePage