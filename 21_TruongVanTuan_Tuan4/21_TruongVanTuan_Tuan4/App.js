import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1111 from './Page/Page1';
import Page1_a from './Page/Page1_a';
import Page1_b from './Page/Page1_b';
import Page1_c from './Page/Page1_c';
import Page1_d from './Page/Page1_d';
import Page1_e from './Page/Page1_e';
import Page2_a from './Page/Page2_a';
import Page2_b from './Page/Page2_b';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarIcon: () => null }}
      tabBarOptions={{
        tabStyle: { flexDirection: 'row', justifyContent: 'center' }, // Đặt chiều dọc và căn giữa chữ
        labelStyle: {
          textAlign: 'center',
          fontSize: 10,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Page1"
        component={Page1111}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Page1_a"
        component={Page1_a}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Page1_b"
        component={Page1_b}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Page1_c"
        component={Page1_c}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Page1_d"
        component={Page1_d}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Page1_e"
        component={Page1_e}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Page2_a"
        component={Page2_a}
        options={{ headerShown: false, }
        }

      />
      <Tab.Screen
        name="Page2_b"
        component={Page2_b}
        options={{ headerShown: false, }
        }
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