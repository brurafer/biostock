import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from '../api';

export default function Solicitar({ route, navigation }) {
  const { user } = route.params;
  const [insumo_id, setInsumoId] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const solicitar = async () => {
    try {
      await api.post('/solicitacoes', {
        tecnico_id: user.id,
        insumo_id,
        quantidade,
        status: 'pendente'
      });
      Alert.alert('Sucesso', 'Solicitação enviada');
      navigation.goBack();
    } catch {
      Alert.alert('Erro', 'Não foi possível enviar');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="ID do Insumo" onChangeText={setInsumoId} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Quantidade" onChangeText={setQuantidade} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Solicitar" onPress={solicitar} />
    </View>
  );
}
