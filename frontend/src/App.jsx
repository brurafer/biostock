import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AprovarSolicitacoes from './pages/AprovarSolicitacoes'
import LiberarInsumo from './pages/LiberarInsumo'
import ConfirmarRetirada from './pages/ConfirmarRetirada'
import AlertasEstoque from './pages/AlertasEstoque'
import Relatorios from './pages/Relatorios'
import PrivateRoute from './components/PrivateRoute'
import { isAuthenticated } from './utils/auth'

const ProtectedLayout = ({ children }) => (
  <div className="flex">
    {isAuthenticated() && <Sidebar />}
    <main className="flex-1 p-4">{children}</main>
  </div>
)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <Dashboard />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/aprovar"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <AprovarSolicitacoes />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/liberar"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <LiberarInsumo />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/confirmar-retirada"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <ConfirmarRetirada />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/alertas"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <AlertasEstoque />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <PrivateRoute>
              <ProtectedLayout>
                <Relatorios />
              </ProtectedLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
