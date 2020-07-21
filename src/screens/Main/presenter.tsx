import React, { useEffect } from 'react';
import styled from 'styled-components/native';
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
import { ico_house, ico_center_focus, ico_mac, ico_account } from '@app/assets';

type Props = {};
type RouteParamsType = { currentTab?: string };

const IconHome = styled.Image`
  width: 20px;
  height: 20px;
`;

function Presenter({  }: Props) {
  const Tab = createBottomTabNavigator();
  const route = useRoute();
  const data = route.params as RouteParamsType;
  console.log(data)
  //---------------------------
  return (
    <Tab.Navigator
      initialRouteName={data?.currentTab}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case MENU_NAMES.HOME:
              return <IconHome source={focused ? ico_house : ico_account} />;
            case MENU_NAMES.OVERVIEW:
              return <IconHome source={focused ? ico_center_focus : ico_center_focus} />;
            case MENU_NAMES.LAB:
              return <IconHome source={focused ? ico_mac : ico_mac} />;
            case MENU_NAMES.PROFILE:
              return <IconHome source={focused ? ico_account : ico_account} />;
            default:
              return null;
          }
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
