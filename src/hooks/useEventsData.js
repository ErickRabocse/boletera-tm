// import { useEffect, useRef } from 'react'
import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'
const useEventsData = () => {
  // const data = useRef([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    setTimeout(() => {
      // data.current = eventsJSON
      // console.log(data.current)
      try {
        setData(eventsJSON)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [])
  // const { _embedded: { events } } = data.current
  return {
    // events: data.current?._embedded?.events || []
    events: data?._embedded?.events || [],
    isLoading,
    error
  }
}
export default useEventsData
