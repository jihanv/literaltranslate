import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Original from './Original.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Original />
  </StrictMode>,
)
