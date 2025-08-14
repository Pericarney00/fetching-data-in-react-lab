// import './App.css'
import { useState, useEffect } from 'react'
import * as starshipService from "./services/starshipService"
import StarshipSearch from "./components/StarshipSearch/StarshipSearch"
import StarshipList from "./components/StarshipList/StarshipList"



const App = () => {
  const [starship,setStarship] = useState({})
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchData = async () => {
    const data = await starshipService.index()
    setStarshipsData(data)
  }

  const searchShips = (searchTerm) => {
    const filteredShips = starshipsData.filter((ship) => 
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDisplayedStarships(filteredShips)
    console.log("Term:", searchTerm)
    console.log(starshipsData)
  }
  
useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.index()
      setStarshipsData(data)
      setDisplayedStarships(data)
    }
    fetchData()
  }, []);


  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch searchShips={searchShips} />
      <h2>Starships</h2>
      <StarshipList displayedStarships={displayedStarships} />
    </main>
  )
};




export default App
