import StarshipCard from "../StarshipCard/StarshipCard"

const StarshipList = (props) => {
  
  return (
    <>
      {props.displayedStarships.map((starship) => {
        return (
          <StarshipCard starship={starship} />
        )
        
      })}
    </>
  );
  }

export default StarshipList;