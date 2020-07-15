/**
 * @title
 */
import React from 'react';
import * as Screen from '@app/screens';

import { StackHeaderTitleProps, StackHeaderLeftButtonProps } from '@react-navigation/stack';

//type
export type RouteType = {
  name: string;
  component: React.ComponentType<any>;
  option?: {
    title?: string;
    headerShown?: boolean;
    animationEnabled?: boolean;
    headerTitle?: string | ((props: StackHeaderTitleProps) => React.ReactNode) | undefined;
    headerRight?: ((props: { tintColor?: string | undefined }) => React.ReactNode) | undefined;
    headerLeft?: ((props: StackHeaderLeftButtonProps) => React.ReactNode) | undefined;
  };
};

// 라우팅이름
export const MENU_NAMES = {
  MAIN: 'MAIN',
  HOME: 'HOME',
  OVERVIEW: 'OVERVIEW',
  PROFILE: 'PROFILE',
  MAP: 'MAP',
  CAMERA: 'CAMERA',
  LAB: 'LAB',
  TEMPLATE1: 'TEMPLATE1',
  TEMPLATE2: 'TEMPLATE2',
};

//라우팅
const routes = [
  {
    name: MENU_NAMES.MAIN,
    component: Screen.MainScreen,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.HOME,
    component: Screen.HomeStackScreen,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.OVERVIEW,
    component: Screen.OverviewStackScreen,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.LAB,
    component: Screen.LabStackScreen,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.PROFILE,
    component: Screen.ProfileStackScreen,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.TEMPLATE1,
    component: Screen.Template1,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
  {
    name: MENU_NAMES.TEMPLATE2,
    component: Screen.TEMPLATE2,
    options: {
      title: '메인',
      headerShown: true,
      animationEnabled: false,
    },
  },
];
export default routes;
