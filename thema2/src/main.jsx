// Importeert StrictMode voor ontwikkelingswaarschuwingen
import { StrictMode } from 'react'
// createRoot koppelt React aan de DOM
import { createRoot } from 'react-dom/client'
// Importeert de globale CSS-stijlen
import './index.css'
// Importeert de hoofdcomponent App
import App from './App.jsx'

// Maakt een root aan in het 'root'-element en rendert de App-component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
