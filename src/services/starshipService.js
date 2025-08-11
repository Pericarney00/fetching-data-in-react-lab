const BASE_URL = "https://swapi.info/api/starships/";

const show = async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    console.log("Data:", data)
  } catch (error) {
    console.log(error)
  }
};


export{index}