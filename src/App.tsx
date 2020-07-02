/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
//contexts
import Color from 'contexts/color.ts';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//screen
import {Home, Profile} from '@screens';
//create
const Drawer = createDrawerNavigator();

export type Props = {};

const App: React.FC<Props> = () => {
  return (
    // <Text>d</Text>
    // <DrawerMenu />
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Main" component={Home} />
        <Drawer.Screen name="DetailsSceen" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
