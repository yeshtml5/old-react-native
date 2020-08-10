/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalContextProvider } from '@app/contexts';
import SplashScreen from 'react-native-splash-screen';

import Drawer from '@app/screens/Drawer';

// disableYellowBox
console.disableYellowBox = true;

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <GlobalContextProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </GlobalContextProvider>
    </React.Fragment>
  );
}
export default App;
