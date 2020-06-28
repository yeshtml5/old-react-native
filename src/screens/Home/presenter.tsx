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

const Tab = createBottomTabNavigator();

export default function Presenter({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FF0000',
      }}>
      <Tab.Screen
        name="Feed"
        component={Profile}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Temp1}
        options={{
          tabBarLabel: 'Overview',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
