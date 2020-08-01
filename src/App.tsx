/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from '@app/screens/Drawer';
import { GlobalContextProvider } from '@app/contexts';

// disableYellowBox
console.disableYellowBox = true;

function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
export default App;
