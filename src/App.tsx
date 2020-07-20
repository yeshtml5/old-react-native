/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from '@app/screens/Drawer';

// disableYellowBox
console.disableYellowBox = true;

export type Props = {};

function App({  }: Props) {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
export default App;
