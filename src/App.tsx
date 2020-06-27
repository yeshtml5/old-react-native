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
//screen
import Main from 'screens/main/index.tsx';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//screens
import HomeScreen from 'screens/temp/HomeScreen.tsx';
import DetatilsScreen from 'screens/temp/DetailsScreen.tsx';
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
          headerStyle: {
            backgroundColor: '#111',
          },
          headerTintColor: '#FFFFFF',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#111"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
      <HomeStack.Screen name="Details" component={DetatilsScreen} />
    </HomeStack.Navigator>
  );
};
const DetailStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <DetailsStack.Screen name="Details" component={DetatilsScreen} />
    </DetailsStack.Navigator>
  );
};
export type Props = {};

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="DetailsSceen" component={DetailStackScreen} />
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
};
export default App;
/**
 *
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    flexDirection: 'column',
  },
  detatils: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: Color.white,
  },
});
