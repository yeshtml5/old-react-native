/**
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import {Home, Temp1, Profile} from '@screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Presenter({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Profile}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Profile}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   tabBarOptions={{
    //     activeTintColor: '#FF0000',
    //   }}>
    //   <Tab.Screen
    //     name="Feed"
    //     component={Profile}
    //     options={{
    //       tabBarLabel: 'Home',
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={Temp1}
    //     options={{
    //       tabBarLabel: 'Overview',
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{
    //       tabBarLabel: 'Profile',
    //     }}
    //   />
    // </Tab.Navigator>
  );
}
