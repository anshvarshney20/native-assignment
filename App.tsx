import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Component1 from './Screen/Component1';
import Component2 from './Screen/Component2';
import Component3 from './Screen/Component3';
import Component4 from './Screen/Component4';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stage1" options={{headerShown:false}} component={Component1} />
        <Stack.Screen name="Stage2" options={{headerShown:false}} component={Component2} />
        <Stack.Screen name="Stage3" options={{headerShown:false}} component={Component3} />
        <Stack.Screen name="Stage4" options={{headerShown:false}} component={Component4} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;