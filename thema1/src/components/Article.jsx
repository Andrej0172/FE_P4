// Article is een component die een artikel weergeeft met een titel en tekst
// Ontvangt 'title' als prop van de parent-component
function Article({ title }) {
  return (
    // Article-element dat semantisch een artikel voorstelt
    <article>
      <h2>{title}</h2>
      <p>Dit is een kort artikel over {title}.</p>
    </article>
  )
}

// Exporteert de Article-component zodat deze in andere bestanden gebruikt kan worden
export default Article
