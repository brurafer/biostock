import React, { useEffect, useState } from 'react'

const EstoqueMinimo = () => {
  const [alertas, setAlertas] = useState([])

  useEffect(() => {
    const mock = [
      { id: 1, nome: 'Álcool 70%', quantidade: 3, minimo: 5 },
      { id: 2, nome: 'Luvas', quantidade: 2, minimo: 10 }
    ]
    setAlertas(mock)
  }, [])

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-bold text-red-600 mb-6">⚠️ Alerta de Estoque Mínimo</h2>
      {alertas.map((i) => (
        <div key={i.id} className="bg-red-50 border border-red-200 p-4 rounded-2xl shadow mb-4">
          <p className="text-red-700 font-semibold">{i.nome}</p>
          <p className="text-sm text-red-600">
            Quantidade atual: {i.quantidade} | Mínimo necessário: {i.minimo}
          </p>
        </div>
      ))}
    </div>
  )
}

export default EstoqueMinimo
