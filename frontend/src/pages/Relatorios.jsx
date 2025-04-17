import React, { useEffect, useState } from 'react'

const Relatorios = () => {
  const [relatorio, setRelatorio] = useState([])

  useEffect(() => {
    const dados = [
      { id: 1, insumo: 'Álcool 70%', tipo: 'Saída', quantidade: 10, data: '2025-04-15' },
      { id: 2, insumo: 'Luvas', tipo: 'Entrada', quantidade: 50, data: '2025-04-12' }
    ]
    setRelatorio(dados)
  }, [])

  const exportarCSV = () => {
    const linhas = [
      ['Insumo', 'Tipo', 'Quantidade', 'Data'],
      ...relatorio.map((r) => [r.insumo, r.tipo, r.quantidade, r.data])
    ]
    const csv = linhas.map((l) => l.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'relatorio.csv'
    link.click()
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-dark">Relatório Mensal</h2>
        <button onClick={exportarCSV} className="bg-primary text-white px-4 py-2 rounded-md">
          Exportar CSV
        </button>
      </div>
      <table className="w-full bg-white shadow rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="p-3">Insumo</th>
            <th className="p-3">Tipo</th>
            <th className="p-3">Quantidade</th>
            <th className="p-3">Data</th>
          </tr>
        </thead>
        <tbody>
          {relatorio.map((r) => (
            <tr key={r.id} className="border-t text-sm">
              <td className="p-3">{r.insumo}</td>
              <td className="p-3">{r.tipo}</td>
              <td className="p-3">{r.quantidade}</td>
              <td className="p-3">{r.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Relatorios
