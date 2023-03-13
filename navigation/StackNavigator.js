import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Planeta from "../screens/Planeta";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Inicial" component={TabNavigator} />
      <Stack.Screen name="Tela de Planetas" component={Planeta} />
    </Stack.Navigator>
  );
};

export default StackNavigator;