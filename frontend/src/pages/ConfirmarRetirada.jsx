import React, { useEffect, useState } from 'react'

const ConfirmarRetirada = () => {
  const [liberados, setLiberados] = useState([])

  useEffect(() => {
    const mock = [
      { id: 1, insumo: 'Álcool 70%', quantidade: 2, dataLiberado: '2025-04-16' }
    ]
    setLiberados(mock)
  }, [])

  const handleConfirmar = (id) => {
    alert(`Retirada da solicitação ${id} confirmada.`)
    setLiberados(liberados.filter((i) => i.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-bold text-dark mb-6">Confirmar Retirada</h2>
      {liberados.map((i) => (
        <div key={i.id} className="bg-white p-4 rounded-2xl shadow mb-4">
          <p><strong>Insumo:</strong> {i.insumo}</p>
          <p><strong>Quantidade:</strong> {i.quantidade}</p>
          <p><strong>Liberado em:</strong> {i.dataLiberado}</p>
          <button
            onClick={() => handle
