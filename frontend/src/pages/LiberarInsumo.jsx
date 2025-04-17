import React, { useEffect, useState } from 'react'

const LiberarInsumos = () => {
  const [solicitacoes, setSolicitacoes] = useState([])

  useEffect(() => {
    const simuladas = [
      { id: 1, tecnico: 'João', insumo: 'Álcool 70%', quantidade: 2, aprovadoEm: '2025-04-15' }
    ]
    setSolicitacoes(simuladas)
  }, [])

  const handleLiberar = (id) => {
    alert(`Solicitação ${id} marcada como liberada.`)
    setSolicitacoes(solicitacoes.filter((s) => s.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-bold text-dark mb-6">Liberar Insumos</h2>
      {solicitacoes.map((s) => (
        <div key={s.id} className="bg-white p-4 rounded-2xl shadow mb-4">
          <p><strong>Técnico:</strong> {s.tecnico}</p>
          <p><strong>Insumo:</strong> {s.insumo}</p>
          <p><strong>Quantidade:</strong> {s.quantidade}</p>
          <p><strong>Aprovado em:</strong> {s.aprov
