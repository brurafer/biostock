import React, { useState, useEffect } from 'react'

const AprovarSolicitacoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([])

  useEffect(() => {
    const mock = [
      { id: 1, tecnico: 'João', insumo: 'Álcool 70%', quantidade: 2, data: '2025-04-15' },
      { id: 2, tecnico: 'Maria', insumo: 'Luvas', quantidade: 10, data: '2025-04-14' }
    ]
    setSolicitacoes(mock)
  }, [])

  const handleAcao = (id, acao) => {
    alert(`Solicitação ${id} ${acao === 'aprovar' ? 'aprovada' : 'recusada'}.`)
    setSolic
