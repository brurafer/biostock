import React, { useEffect, useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import api from '../api';

export default function AprovarRecusar() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    api.get('/solicitacoes?status=pendente').then(res => setSolicitacoes(res.data));
  }, []);

  const atualizarStatus = (id, status) => {
    api.put(`/solicitacoes/${id}`, { status }).then(() => {
      alert('Atualizado');
    });
  };

  return (
    <FlatList
      data={solicitacoes}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text>Solicitação #{item.id}</Text>
          <Button title="Aprovar" onPress={() => atualizarStatus(item.id, 'aprovado')} />
          <Button title="Recusar" onPress={() => atualizarStatus(item.id, 'recusado')} />
        </View>
      )}
    />
  );
}
