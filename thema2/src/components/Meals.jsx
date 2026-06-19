// Importeert de hooks useState en useEffect van React
import { useState, useEffect } from 'react'
// Importeert de Dish-component
import Dish from './Dish.jsx'

// Meals is de component die recepten ophaalt en weergeeft
function Meals() {
  // useState voor de lijst met gerechten, begint leeg
  const [meals, setMeals] = useState([])
  // useState voor de geselecteerde letter, standaard 'a'
  const [selectedLetter, setSelectedLetter] = useState('a')
  // useState voor de laadstatus
  const [loading, setLoading] = useState(false)

  // useEffect wordt uitgevoerd wanneer selectedLetter verandert
  useEffect(() => {
    setLoading(true)
    // Haalt gerechten op van TheMealDB API op basis van de geselecteerde beginletter
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`)
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals || [])
        setLoading(false)
      })
  }, [selectedLetter])

  return (
    <div>
      {/* Drie knoppen om te filteren op beginletter A, B of C */}
      <div className="buttons">
        <button className={selectedLetter === 'a' ? 'active' : ''} onClick={() => setSelectedLetter('a')}>A</button>
        <button className={selectedLetter === 'b' ? 'active' : ''} onClick={() => setSelectedLetter('b')}>B</button>
        <button className={selectedLetter === 'c' ? 'active' : ''} onClick={() => setSelectedLetter('c')}>C</button>
      </div>
      <h2>Recepten beginnend met {selectedLetter.toUpperCase()}</h2>
      {/* Toont "Laden..." tijdens het ophalen, anders de lijst met gerechten */}
      {loading ? (
        <p>Laden...</p>
      ) : (
        <section>
          {meals.map(meal => (
            <Dish key={meal.idMeal} meal={meal} />
          ))}
        </section>
      )}
    </div>
  )
}

export default Meals
