import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './src/pages/SignUp'
import Home from './src/pages/Home'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SignUp'
          component={SignUp}
        />
         <Stack.Screen
          name='Home'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App;