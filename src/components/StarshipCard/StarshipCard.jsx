
const StarshipCard = (props) => {
console.log("StarshipCard Details:", props)
  return (
    <section>
      banana
      <h3>{props.starship.name}</h3>
      <p>{props.starship.starship_class}</p>
      <p>{props.starship.smanufacturer}</p>
      <p>{props.starship.model}</p>
    </section>
  );
}

export default StarshipCard;