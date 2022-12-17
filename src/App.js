import { useState, useEffect } from 'react';
import './App.css';
import StarshipDisplay from './components/StarshipDisplay';

function App() {
  const [starship, setStarship] = useState([])

  useEffect(() => {
    const getStarship = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/`)
      const data = await response.json()
      setStarship(data)
    }
    getStarship()
  }, [])
 
  const shipArray = starship.results

  console.log(shipArray)

  const shipNames = shipArray?.map((ele, index)=> {
    return (
      <div className="starship-container" key={index}>{ele.name}</div>
    )
  })

  return (
    <div className="App">
      <div className="header"><h1>Star Wars Starships</h1></div>
      <StarshipDisplay shipNames={shipNames} />
    </div>
  );
}

export default App;
