import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme= {theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
