/**
 * @title
 */
import React from 'react';
import * as Screen from '@app/screens';

import { StackHeaderTitleProps, StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { BackButton, HomeButton } from '@app/components';
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
  STACK: 'STACK',
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
    name: MENU_NAMES.STACK,
    component: Screen.Main,
    options: {
      title: '메인이다',
      headerShown: false,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.HOME,
    component: Screen.Home,
    options: {
      title: '홈',
      headerShown: true,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.OVERVIEW,
    component: Screen.Overview,
    options: {
      title: '오버뷰',
      headerShown: true,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.LAB,
    component: Screen.Lab,
    options: {
      title: '랩',
      headerShown: true,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.PROFILE,
    component: Screen.Profile,
    options: {
      title: '프로필',
      headerShown: true,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.TEMPLATE1,
    component: Screen.Template1,
    options: {
      title: '템플릿1',
      headerShown: true,
      animationEnabled: true,
    },
  },
  {
    name: MENU_NAMES.TEMPLATE2,
    component: Screen.Template2,
    options: {
      title: '템플릿2',
      headerShown: true,
      animationEnabled: true,
      headerLeft: props => <BackButton {...props} />,
    },
  },
];
export default routes;
