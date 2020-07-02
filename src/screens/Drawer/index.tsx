/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';

//screen
import {Home, Profile} from '@screens';

import {createDrawerNavigator} from '@react-navigation/drawer';

export type Props = {};

//create
const Drawer = createDrawerNavigator();

const DrawerScreen: React.FC<Props> = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
