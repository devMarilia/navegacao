import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}