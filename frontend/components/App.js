import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    } 
    fetchPhoto()
  }, [])

  if (!apod) return 'Fetching Photo...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
        />
    </section>
  )
}
export default App
