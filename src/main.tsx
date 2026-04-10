import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './core/router.tsx'
import { ConfigProvider } from 'antd'
import { themeConfig } from './core/theme/theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <AppRouter />
    </ConfigProvider>
  </StrictMode>,
)
