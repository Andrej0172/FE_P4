// Importeert de afbeelding uit de assets-map
import heroImg from '../assets/hero.png'

// ImageCard is een component die een afbeelding toont in een article-element
function ImageCard() {
  return (
    <article>
      <img src={heroImg} alt="Hero afbeelding" width="200" />
    </article>
  )
}

// Exporteert de ImageCard-component
export default ImageCard
