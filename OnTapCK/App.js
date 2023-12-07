import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_Home from './Screens/screen_home';
import Screen_Todo from './Screens/screen_TodoList';
import store from './Redux/store';
import { Provider } from 'react-redux';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen_Home" component={Screen_Home} options={{headerShown:false}} />
      <Stack.Screen name="Screen_Todo" component={Screen_Todo} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
