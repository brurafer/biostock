import React, { useEffect, useState } from 'react'

const VisualizarSolicitacoes = () => {
  const [solicitacoes, setSolicitacoes] = useState([])

  // Simulando dados que viriam do backend
  useEffect(() => {
    const dadosSimulados = [
      {
        id: 1,
        insumo: 'Álcool Etílico 70%',
        quantidade: 2,
        status: 'Pendente',
        data_solicitacao: '2025-04-15',
        data_aprovacao: null,
        data_retirada: null,
        data_liberacao: null,
      },
      {
        id: 2,
        insumo: 'Luvas de Procedimento',
        quantidade: 5,
        status: 'Aprovada',
        data_solicitacao: '2025-04-10',
        data_aprovacao: '2025-04-11',
        data_retirada: null,
        data_liberacao: '2025-04-12',
      },
      {
        id: 3,
        insumo: 'Máscara PFF2',
        quantidade: 3,
        status: 'Retirada',
        data_solicitacao: '2025-04-05',
        data_aprovacao: '2025-04-06',
        data_retirada: '2025-04-07',
        data_liberacao: '2025-04-06',
      },
