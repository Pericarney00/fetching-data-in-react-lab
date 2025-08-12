import { useState, useEffect } from 'react'
import * as starshipService from "./services/starshipService"
import './App.css'
import StarshipSearch from "./components/StarshipSearch/StarshipSearch"
import StarshipList from "./components/StarshipList/StarshipList"


const App = () => {
  
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipService.show()
    console.log("Data:", data)
  }

useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.show()
      setStarshipsData(data)
      setDisplayedStarships(data)
    }
    fetchData()
  }, []);


  return (
    <main>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      <h2>Starships</h2>
      <StarshipList displayedStarships={displayedStarships} />
    </main>
  )
};




export default App
