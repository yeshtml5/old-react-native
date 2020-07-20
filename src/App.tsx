/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Draw } from '@app/screens';
import { MENU_NAMES } from '@app/lib';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Screen from '@app/screens';

// disableYellowBox
console.disableYellowBox = true;
const Drawer = createDrawerNavigator();
export type Props = {};

function App() {
  // useState

  return (
    <NavigationContainer>
      {/* <Draw /> */}
      <Drawer.Navigator initialRouteName={MENU_NAMES.STACK}>
        <Drawer.Screen name={MENU_NAMES.STACK} component={Screen.Stack} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
