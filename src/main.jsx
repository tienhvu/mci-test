import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import theme from './theme.js'
import { StatusProvider } from './context/status_context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme= {theme}>
      <StatusProvider>
        <CssBaseline />
        <App />

      </StatusProvider>
    </ThemeProvider>
  </StrictMode>
)
