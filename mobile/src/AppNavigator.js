import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Solicitar from './screens/Solicitar';
import VisualizarSolicitacoes from './screens/VisualizarSolicitacoes';
import AprovarRecusar from './screens/AprovarRecusar';
import LiberarInsumo from './screens/LiberarInsumo';
import ConfirmarRetirada from './screens/ConfirmarRetirada';
import AlertaEstoque from './screens/AlertaEstoque';
import Relatorios from './screens/Relatorios';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Solicitar" component={Solicitar} />
        <Stack.Screen name="VisualizarSolicitacoes" component={VisualizarSolicitacoes} />
        <Stack.Screen name="AprovarRecusar" component={AprovarRecusar} />
        <Stack.Screen name="LiberarInsumo" component={LiberarInsumo} />
        <Stack.Screen name="ConfirmarRetirada" component={ConfirmarRetirada} />
        <Stack.Screen name="AlertaEstoque" component={AlertaEstoque} />
        <Stack.Screen name="Relatorios" component={Relatorios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
