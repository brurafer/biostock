import React, { useEffect, useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import api from '../api';

export default function ConfirmarRetirada({ route }) {
  const { user } = route.params;
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    api.get(`/solicitacoes?tecnico_id=${user.id}&status=liberado`).then(res => setSolicitacoes(res.data));
  }, []);

  const confirmar = (id) => {
    api.put(`/solicitacoes/${id}`, { status: 'retirado', data_retirada: new Date() });
    alert('Retirada confirmada');
  };

  return (
    <FlatList
      data={solicitacoes}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text>Solicitação #{item.id}</Text>
          <Button title="Confirmar Retirada" onPress={() => confirmar(item.id)} />
        </View>
      )}
    />
  );
}
