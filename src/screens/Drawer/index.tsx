/**
 * Sample React Native App
 * @reference
 * https://github.com/facebook/react-native
 * https://reactnavigation.org/docs/drawer-navigator
 */

import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';
//contexts
//screen
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '@screens/temp/HomeScreen';
import DetatilsScreen from '@screens/temp/DetailsScreen';

const DetailStackScreen = ({navigation}) => {
  return <Text>dds</Text>;
};
export type Props = {};

//create
const Drawer = createDrawerNavigator();

export const DrawerMenu: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Main1" component={DetailStackScreen} />
        <Drawer.Screen name="DetailsSceen" component={DetailStackScreen} />
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
};
