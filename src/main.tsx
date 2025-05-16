import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/base-style.scss'
import './styles/navbar-style.scss'
import './styles/footer-style.scss'
import './styles/main-style.scss'
import './styles/main-section-style.scss'
import './styles/style.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
