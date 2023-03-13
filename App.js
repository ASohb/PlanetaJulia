import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Inicial from "./screens/Inicial";

import { NavigationContainer } from '@react-navigation/native';


import Planeta from "./screens/Planeta";
import CardPlanetas from "./screens/CardPlanetas";
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 



export default function App()  {
 
  return (
    <View >
      <AppContainer/>
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  Inicial:Inicial,
  Planeta : Planeta
})

const AppContainer = createAppContainer(AppNavigator)


