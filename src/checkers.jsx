import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CheckersGame from './checkersGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckersGame />
  </StrictMode>,
)