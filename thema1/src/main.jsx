// Importeert de StrictMode-component voor extra ontwikkelingswaarschuwingen
import { StrictMode } from 'react'
// createRoot wordt gebruikt om de React-app aan de DOM te koppelen
import { createRoot } from 'react-dom/client'
// Importeert de App-component die alle onderdelen van de pagina bevat
import App from './App.jsx'

// Maakt een root aan in het 'root'-element en rendert de App-component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
