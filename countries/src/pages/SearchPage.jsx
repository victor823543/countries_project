import { useState, useEffect, useMemo } from 'react'
import useFetchData from '../hooks/useFetchData'
import { getNameList } from '../utils/functions'
import DropdownSearch from '../components/DropdownSearch'
import SearchSection from '../sections/SearchSection'
import DisplaySection from '../sections/DisplaySection'
import { GridContainer } from '../components/styles/Containere.styles'
import DisplayMap from '../sections/DisplayMap'


const SearchPage = () => {
  const queryParams = useMemo(() => ({ fields: 'name' }), [])
  const {data, loading, error} = useFetchData('all', queryParams)
  const [allCountryNames, setAllCountryNames] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countryId, setCountryId] = useState(null)
  const [showMap, setShowMap] = useState(false)


  useEffect(() => {
    if (data) {
      setAllCountryNames(getNameList(data))
    }
  }, [data])

  if (loading || !allCountryNames) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
    <GridContainer>
      <SearchSection startMode={selectedCountry ? false : true} setShowMap={setShowMap}>
        <DropdownSearch options={allCountryNames} setSelectedCountry={setSelectedCountry} />
      </SearchSection>
      <DisplaySection country={selectedCountry} setCountryId={setCountryId}/>

    </GridContainer>
    {showMap && 
      <DisplayMap selectedCountry={countryId} setShowMap={setShowMap}/>
    }
    </>
    
  )
}

export default SearchPage