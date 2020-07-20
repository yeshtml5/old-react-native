/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes, defaultHeaderStyle, MENU_NAMES } from '@app/lib';

export type Props = {};

function Presenter() {
  //stack
  const Stack = createStackNavigator();

  // useState
  const [defaultScreen, setDefaultScreen] = useState<string>(MENU_NAMES.MAIN);
  const styleByHeaderTitle = {
    color: '#000000',
    backgroundColor: '#eeeeee',
  };
  return (
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
  );
}
export default Presenter;
