import React, { useState } from 'react'

const SolicitarInsumo = () => {
  const [insumoSelecionado, setInsumoSelecionado] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [mensagem, setMensagem] = useState('')

  const insumos = [
    { id: 1, nome: 'Álcool Etílico 70%' },
    { id: 2, nome: 'Luvas de Procedimento' },
    { id: 3, nome: 'Máscara PFF2' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!insumoSelecionado || !quantidade) {
      setMensagem('Preencha todos os campos.')
      return
    }

    // Aqui, futuramente, enviaremos a solicitação para o backend
    setMensagem('Solicitação enviada com sucesso!')
    setInsumoSelecionado('')
    setQuantidade('')
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold text-dark mb-4">Solicitar Insumo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-dark">Insumo</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={insumoSelecionado}
            onChange={(e) => setInsumoSelecionado(e.target.value)}
            required
          >
            <option value="">Selecione um insumo</option>
            {insumos.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-dark">Quantidade</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
            min={1}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:opacity-90"
        >
          Enviar Solicitação
        </button>
      </form>

      {mensagem && (
        <p className="mt-4 text-center text-green-600 font-medium">{mensagem}</p>
      )}
    </div>
  )
}

export default SolicitarInsumo
