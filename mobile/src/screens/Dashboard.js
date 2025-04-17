import React from 'react';
import { View, Button, Text } from 'react-native';

export default function Dashboard({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Bem-vindo, {user.nome}</Text>
      {user.tipo_usuario === 'tecnico' && (
        <>
          <Button title="Solicitar Insumo" onPress={() => navigation.navigate('Solicitar', { user })} />
          <Button title="Minhas Solicitações" onPress={() => navigation.navigate('ConfirmarRetirada', { user })} />
        </>
      )}
      {user.tipo_usuario === 'chefe' && (
        <>
          <Button title="Aprovar Solicitações" onPress={() => navigation.navigate('AprovarRecusar')} />
        </>
      )}
      {user.tipo_usuario === 'laboratorio' && (
        <>
          <Button title="Liberar Insumos" onPress={() => navigation.navigate('LiberarInsumo')} />
        </>
      )}
      <Button title="Visualizar Solicitações" onPress={() => navigation.navigate('VisualizarSolicitacoes')} />
      <Button title="Alertas de Estoque" onPress={() => navigation.navigate('AlertaEstoque')} />
      <Button title="Relatórios" onPress={() => navigation.navigate('Relatorios')} />
    </View>
  );
}
