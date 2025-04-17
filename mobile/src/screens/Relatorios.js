import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api';

export default function Relatorios() {
  const [relatorio, setRelatorio] = useState([]);

  useEffect(() => {
    api.get('/relatorios/mensal').then(res => setRelatorio(res.data));
  }, []);

  return (
    <FlatList
      data={relatorio}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Text>{item.tipo_movimentacao}: {item.quantidade} - {new Date(item.data_movimentacao).toLocaleDateString()}</Text>
        </View>
      )}
    />
  );
}
