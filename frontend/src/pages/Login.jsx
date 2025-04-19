import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, senha });
      const { token, tipo } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('tipo', tipo);

      // Redireciona para a dashboard após o login
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#BFD9D4]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1A1A1A]">BioStock - Login</h2>

        <div className="mb-4">
          <label className="block text-[#1A1A1A] text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1A1A1A] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="email@exemplo.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#1A1A1A] text-sm font-bold mb-2" htmlFor="senha">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1A1A1A] leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#1A1A1A] hover:bg-[#63666A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
