/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerScreen } from '@app/screens';

export type Props = {};

function App() {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
}
export default App;
