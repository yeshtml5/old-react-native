import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MENU_NAMES } from '@app/lib';
import * as Screen from '@app/screens';

const Tab = createBottomTabNavigator();

function MainScreen() {
  //---------------------------
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={MENU_NAMES.HOME}
        component={Screen.HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name={MENU_NAMES.OVERVIEW}
        component={Screen.OverviewStackScreen}
        options={{
          tabBarLabel: 'OVERVIEW',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU_NAMES.LAB}
        component={Screen.LabStackScreen}
        options={{
          tabBarLabel: 'LAB',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU_NAMES.PROFILE}
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
}
export default MainScreen;
