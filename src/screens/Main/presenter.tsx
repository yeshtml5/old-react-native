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
import { useRoute } from '@react-navigation/native';

type Props={}
type RouteParamsType = { currentTab?: string };

const Tab = createBottomTabNavigator();

function Presenter({}:Props) {
  const route = useRoute();
  const data = route.params as RouteParamsType;
  //---------------------------
  return (
    <Tab.Navigator
      initialRouteName={data?.currentTab}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          return icon;
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: -0.6,
        },
        style: {
          backgroundColor: '#FFFFFF',
        },
        inactiveBackgroundColor: '#ffffff',
        inactiveTintColor: '#999999',
        activeBackgroundColor: '#ffffff',
        activeTintColor: '#FF0000',
      }}>
      <Tab.Screen name={MENU_NAMES.HOME} component={Home} />
      <Tab.Screen name={MENU_NAMES.OVERVIEW} component={Overview} />
      <Tab.Screen name={MENU_NAMES.LAB} component={Lab} />
      <Tab.Screen name={MENU_NAMES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default Presenter;
