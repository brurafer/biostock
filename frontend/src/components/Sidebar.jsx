import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  const tipo = usuario?.tipo

  const menu = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/aprovar', label: 'Aprovar Solicitações', roles: ['chefe'] },
    { path: '/liberar', label: 'Liberar Insumo', roles: ['estoquista'] },
    { path: '/confirmar-retirada', label: 'Confirmar Retirada', roles: ['tecnico'] },
    { path: '/alertas', label: 'Alertas de Estoque', roles: ['estoquista'] },
    { path: '/relatorios', label: 'Relatórios', roles: ['admin'] },
  ]

  return (
    <div className="w-64 h-screen bg-[#BFD9D4] text-dark p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-8">BioStock</h2>
      <ul className="space-y-4">
        {menu
          .filter((item) => !item.roles || item.roles.includes(tipo))
          .map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded-xl ${
                  location.pathname === item.path ? 'bg-white font-bold' : 'hover:bg-white/30'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Sidebar
