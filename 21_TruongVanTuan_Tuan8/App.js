import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_01 from './Screens/Screen_01';
import Screen_02 from './Screens/Screen_02';
import Screen_03 from './Screens/Screen_03';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen_01" component={Screen_01} options={{headerShown:false}} />
      <Stack.Screen name="Screen_02" component={Screen_02} options={{headerShown:false}} />
      <Stack.Screen name="Screen_03" component={Screen_03} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
