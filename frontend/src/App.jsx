import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AprovarSolicitacoes from './pages/AprovarSolicitacoes'
import LiberarInsumos from './pages/LiberarInsumos'
import ConfirmarRetirada from './pages/ConfirmarRetirada'
import EstoqueMinimo from './pages/EstoqueMinimo'
import Relatorios from './pages/Relatorios'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aprovar" element={<AprovarSolicitacoes />} />
        <Route path="/liberar" element={<LiberarInsumos />} />
        <Route path="/confirmar" element={<ConfirmarRetirada />} />
        <Route path="/estoque-minimo" element={<EstoqueMinimo />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  )
}

export default App
