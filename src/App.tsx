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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//screens
import HomeScreen from '@screens/temp/HomeScreen';
import DetatilsScreen from '@screens/temp/DetailsScreen';
//create
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

//
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bottom1" component={HomeScreen} />
      <Tab.Screen name="Settings" component={DetailStackScreen} />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({navigation}) => {
  return (
    <MyTabs />
    // <HomeStack.Navigator>
    //   <HomeStack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       title: 'Overview',
    //       headerStyle: {
    //         backgroundColor: '#aaa',
    //       },
    //       headerTintColor: '#FFFFFF',
    //       headerLeft: () => (
    //         <Icon.Button
    //           name="ios-menu"
    //           size={25}
    //           backgroundColor="#aaa"
    //           onPress={() => {
    //             console.log('test');
    //             navigation.openDrawer();
    //           }}
    //         />
    //       ),
    //     }}
    //   />
    //   <HomeStack.Screen name="Details" component={DetatilsScreen} />
    // </HomeStack.Navigator>
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
        <Drawer.Screen name="Main" component={HomeStackScreen} />
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
