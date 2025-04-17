import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Aqui no futuro vai ter chamada de autenticação real
    if (email && senha) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold text-center mb-4 text-dark">Login - BioStock</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-dark">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-dark">Senha</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:opacity-90"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
