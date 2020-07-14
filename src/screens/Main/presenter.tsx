import React, { useEffect } from 'react';
import { View } from 'react-native';
//navigation
//screens
import * as Screen from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  //---------------------------
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Screen.HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Overview"
        component={Screen.OverviewStackScreen}
        options={{
          tabBarLabel: 'OVERVIEW',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab"
        component={Screen.LabStackScreen}
        options={{
          tabBarLabel: 'LAB',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen.ProfileStackScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainScreen;
