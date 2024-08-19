import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../main/App.jsx'
import '../main/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
