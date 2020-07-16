import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MENU_NAMES } from '@app/lib';
import * as Screen from '@app/screens';

import Home from './Home';
import Profile from './Profile';
import Lab from './Lab';
import Overview from './Overview';

const Tab = createBottomTabNavigator();

function MainScreen() {
  //---------------------------
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: -0.6,
        },
        style: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Tab.Screen name={MENU_NAMES.HOME} component={Home} />
      <Tab.Screen name={MENU_NAMES.OVERVIEW} component={Overview} />
      <Tab.Screen name={MENU_NAMES.LAB} component={Lab} />
      <Tab.Screen name={MENU_NAMES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default MainScreen;
