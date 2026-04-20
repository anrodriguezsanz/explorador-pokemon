import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './core/i18n/config.ts'
import { AppRouter } from './core/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppRouter />
  </StrictMode>,
)
