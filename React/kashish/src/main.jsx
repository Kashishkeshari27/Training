import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './Context/GlobalProvider.jsx'
import { ThemeProvider } from './Context/Theme.jsx'
import { CounterContext } from './Context/Counter.jsx'

createRoot(document.getElementById('root')).render(
 
    <ThemeProvider>
       <StrictMode>
        <GlobalProvider> </GlobalProvider>
          <CounterContext><App /> </CounterContext>
  </StrictMode>
    </ThemeProvider>

     
)
