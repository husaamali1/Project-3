// * Imports
import { useEffect } from 'react'
import axios from 'axios'


function App() {

  useEffect(() => {
    async function getCarData() {
      try {
        const { data } = await axios.get('/api/cars')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCarData()
  }, [])

  return (
    <>
    <h1>Hello world</h1>
    </>
  )
}

export default App
