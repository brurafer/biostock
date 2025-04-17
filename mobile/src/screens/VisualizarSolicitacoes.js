import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api';

export default function VisualizarSolicitacoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/solicitacoes').then(res => setData(res.data));
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>ID: {item.id} | Insumo: {item.insumo_id} | Status: {item.status}</Text>
        </View>
      )}
    />
  );
}
