import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const showHeader = location.pathname !== '/'

  const handleLogout = () => {
    navigate('/')
  }

  return showHeader ? (
    <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-2xl">
      <h1 className="text-xl font-bold text-dark">BioStock</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
      >
        Sair
      </button>
    </header>
  ) : null
}

export default Header
