import React from 'react'
import './main.sass'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CreditsFooter from './components/credits-footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CreditsFooter/>
  </React.StrictMode>,
)
