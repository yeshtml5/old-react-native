/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
//screen
import { DrawerScreen } from '@screens';
//  import { DrawerScreen } from './screens/';

export type Props = {};

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};
export default App;
