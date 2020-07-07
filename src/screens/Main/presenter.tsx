import React, { useEffect } from 'react';
import { View } from 'react-native';
//navigation
//screens
import {
  OverviewStackScreen,
  HomeStackScreen,
  LabStackScreen,
  ProfileStackScreen,
} from '@screens/index';
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
        component={LabStackScreen}
        options={{
          tabBarLabel: 'LAB',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
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
