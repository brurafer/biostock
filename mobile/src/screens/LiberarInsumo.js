import React, { useEffect, useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import api from '../api';

export default function LiberarInsumo() {
  const [aprovadas, setAprovadas] = useState([]);

  useEffect(() => {
    api.get('/solicitacoes?status=aprovado').then(res => setAprovadas(res.data));
  }, []);

  const liberar = (id) => {
    api.put(`/solicitacoes/${id}`, { status: 'liberado', data_liberacao: new Date() }).then(() => {
      alert('Insumo liberado');
    });
  };

  return (
    <FlatList
      data={aprovadas}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text>Solicitação #{item.id}</Text>
          <Button title="Liberar" onPress={() => liberar(item.id)} />
        </View>
      )}
    />
  );
}
