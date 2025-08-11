const BASE_URL = "https://swapi.info/api/starships/";

const show = async () => {
  try {
    const res = await fetch(BASE_URL)
    if (!res.ok) {
      throw new Error("Failed to fetch starships.")
    }
    const data = await res.json()
    console.log("Data:", data)
  } catch (error) {
    console.log(error)
  }
};


export{show}