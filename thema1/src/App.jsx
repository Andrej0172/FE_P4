// Importeert de Article-component voor het tonen van artikelen
import Article from './components/Article.jsx'
// Importeert de ImageCard-component voor het tonen van een afbeelding
import ImageCard from './components/ImageCard.jsx'

// App is de hoofdcomponent die alle onderdelen van de pagina verzamelt
function App() {
  return (
    // Section-element dat alle componenten groepeert
    <section>
      <ImageCard />
      <Article title="React" />
      <Article title="JSX" />
      <Article title="Componenten" />
    </section>
  )
}

// Exporteert de App-component zodat deze in main.jsx gebruikt kan worden
export default App
