import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.tsx'

import './index.css'
import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'


// ELE CRIA UM ELMENTO PRINCIPAL E REENDERIZA
ReactDOM.createRoot(document.getElementById('root')!).render(

  // chama o componente Home
  <React.StrictMode>
    <ListaServicos />
  </React.StrictMode>,
)
