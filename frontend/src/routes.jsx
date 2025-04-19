import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AprovarSolicitacoes from './pages/AprovarSolicitacoes';
import LiberarInsumo from './pages/LiberarInsumo';
import ConfirmarRetirada from './pages/ConfirmarRetirada';
import AlertasEstoque from './pages/AlertasEstoque';
import EstoqueMinimo from './pages/EstoqueMinimo';
import Relatorios from './pages/Relatorios';
import SolicitarInsumo from './pages/SolicitarInsumo';
import VisualizarSolicitacoes from './pages/VisualizarSolicitacoes';
import AppLayout from './components/AppLayout';
import PrivateRoute from './components/PrivateRoute';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AppLayout><Dashboard /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/aprovar"
          element={
            <PrivateRoute>
              <AppLayout><AprovarSolicitacoes /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/liberar"
          element={
            <PrivateRoute>
              <AppLayout><LiberarInsumo /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/confirmar"
          element={
            <PrivateRoute>
              <AppLayout><ConfirmarRetirada /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/alertas"
          element={
            <PrivateRoute>
              <AppLayout><AlertasEstoque /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/estoque-minimo"
          element={
            <PrivateRoute>
              <AppLayout><EstoqueMinimo /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <PrivateRoute>
              <AppLayout><Relatorios /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/solicitar"
          element={
            <PrivateRoute>
              <AppLayout><SolicitarInsumo /></AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/solicitacoes"
          element={
            <PrivateRoute>
              <AppLayout><VisualizarSolicitacoes /></AppLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
