/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerScreen } from '@app/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { routes, defaultHeaderStyle, MENU_NAMES } from '@app/lib';

// disableYellowBox
console.disableYellowBox = true;

export type Props = {};

function App() {
  //stack
  const Stack = createStackNavigator();

  // useState
  const [defaultScreen, setDefaultScreen] = useState<string>(MENU_NAMES.STACK);
  const styleByHeaderTitle = {
    color: '#000000',
    backgroundColor: '#eeeeee',
  };
  return (
    <NavigationContainer>
      {/* <DrawerScreen /> */}
      <Stack.Navigator
        initialRouteName={defaultScreen}
        screenOptions={{
          headerStyle: styleByHeaderTitle,
          headerTitleAlign: 'center',
          headerTitleStyle: Object.assign(defaultHeaderStyle, styleByHeaderTitle),
        }}>
        {routes.map((route, index) => {
          const { name, component, options } = route;
          return (
            <Stack.Screen
              key={`${name}_${index}`}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
