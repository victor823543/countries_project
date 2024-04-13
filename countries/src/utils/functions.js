
export const getNameList = (data) => {
    const nameList = data.map(obj => obj['name']['common'])
    const sortedNameList = nameList.sort()
    return sortedNameList
}

const getValues = objList => objList.map(obj => Object.values(obj)[0])

export const getSortedInfo = (data) => {
    const infoList = [
        {Capital: data.capital},
        {Languages: Object.values(data.languages)},
        {Population: [data.population]},
        {Area: [`${data.area} km2`]},
        {Region: [data.region]},
        {Currency: Object.values(data.currencies).map(obj => obj['name'])},
    ]
    console.log(infoList)
    return infoList
}

export const getRandomItems = (list, numberOfItems) => {
    // Shuffle the list
    const shuffledList = list.sort(() => Math.random() - 0.5);
  
    // Get the first numberOfItems elements
    return shuffledList.slice(0, numberOfItems);
  }