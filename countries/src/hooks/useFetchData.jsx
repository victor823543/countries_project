import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = (endpoint = '', queryParams = {}, fetch = true) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/${endpoint}`, { params: queryParams })
                console.log(response.data)
                setData(response.data)
                setError(null);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        
        if (fetch) {
            fetchData()
        }
    
        return () => {}

    }, [endpoint, queryParams])
    
    return { data, loading, error }
}
    
    export default useFetchData
