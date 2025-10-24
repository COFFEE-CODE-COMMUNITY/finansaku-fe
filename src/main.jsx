import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './index.css'
import App from './App.jsx' 
// import Route from "./routePages.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />  
      {/* <Route/>      */}
    </BrowserRouter>
  </StrictMode>,
)