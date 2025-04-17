import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api';

export default function AlertaEstoque() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    api.get('/insumos/alertas').then(res => setAlertas(res.data));
  }, []);

  return (
    <FlatList
      data={alertas}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.nome} abaixo do nível mínimo! ({item.quantidade_total})</Text>
        </View>
      )}
    />
  );
}
