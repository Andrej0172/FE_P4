// Importeert de useState-hook voor het bijhouden van lokale staat
import { useState } from 'react'

// Dish is een component die een recept weergeeft in een article-element
// Ontvangt 'meal' als prop met de gegevens van het gerecht
function Dish({ meal }) {
  // useState voor de titel, geïnitialiseerd met de titel uit de API
  const [title, setTitle] = useState(meal.strMeal)
  // useState om bij te houden of de titel wordt bewerkt
  const [editing, setEditing] = useState(false)

  return (
    <article>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        {/* Als editing true is, toon een invoerveld; anders toon de titel als tekst */}
        {editing ? (
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
            style={{ flex: 1, padding: '4px 8px', fontSize: '16px' }}
          />
        ) : (
          <h3 style={{ margin: 0 }}>{title}</h3>
        )}
        {/* Potloodicoon waarmee de titel bewerkt kan worden */}
        <svg
          onClick={() => setEditing(!editing)}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: 'pointer', flexShrink: 0 }}
        >
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        </svg>
      </div>
      {/* Toont de categorie en het land van het gerecht */}
      <p>Categorie: {meal.strCategory}</p>
      <p>Land: {meal.strArea}</p>
      {/* Toont de afbeelding van het gerecht */}
      <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
    </article>
  )
}

export default Dish
