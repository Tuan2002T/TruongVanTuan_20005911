import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page2_a from './Page/Page2_a';
import Page2_b from './Page/Page2_b';
import Page2_c from './Page/Page2_c';
import Tiki_Ok from './Page/Tiki_Ok';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textAlign: 'center',
          fontSize: 10,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Page2_a"
        component={Page2_a}
        options={{ headerShown: false, }}
      />

      <Tab.Screen
        name="Page2_b"
        component={Page2_b}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Page2_c"
        component={Page2_c}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Tiki_Ok"
        component={Tiki_Ok}
        options={{ headerShown: false, }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}