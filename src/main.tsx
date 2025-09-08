import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import { GlobalStyle, lighTheme } from './styles/'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
