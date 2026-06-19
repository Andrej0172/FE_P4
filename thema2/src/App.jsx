// Importeert de Meals-component die de recepten weergeeft
import Meals from './components/Meals.jsx'

// App is de hoofdcomponent van de applicatie
function App() {
  return (
    <div>
      <h1>Recepten Overzicht</h1>
      <Meals />
    </div>
  )
}

// Exporteert de App-component
export default App
