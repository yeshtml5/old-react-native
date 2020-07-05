/**
 *
 */
import React, { useEffect } from 'react';
import { View } from 'react-native';
//navigation
//screens
import {
  Overview,
  Template1,
  Template2,
  OverviewStackScreen,
  HomeStackScreen,
} from '@screens/index';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  //---------------------------
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Overview"
        component={OverviewStackScreen}
        options={{
          tabBarLabel: 'OVERVIEW',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab"
        component={Template1}
        options={{
          tabBarLabel: 'LAB',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Template2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
/*
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      style={{ backgroundColor: 'tomato' }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Notifications1"
        component={Template1}
        options={{
          tabBarLabel: 'Template1',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Template1}
        options={{
          tabBarLabel: 'Template1',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Template2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
*/
