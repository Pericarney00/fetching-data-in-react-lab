import {useState} from "react"



const StarshipSearch = (props) => {
  const [searchInput, setSearchInput] = useState("")
  const [prevSearchTerm, setPrevSearchTerm] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.searchShips(searchInput)
    setPrevSearchTerm(searchInput)
    setSearchInput("")
  }
    return (
      <section>
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="starshipSearch">Search for Starship:</label>
          <input
            type="text"
            id="starshipSearch"
            value={searchInput}
            onChange={(event)=> setSearchInput(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    )
}





export default StarshipSearch;