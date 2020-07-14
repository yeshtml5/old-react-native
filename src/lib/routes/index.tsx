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
  MAIN: 'MAIN', //----------------------메인
  HOME: 'HOME', //----------------------홈
  OVERVIEW: 'OVERVIEW', //--------------오버뷰
  PROFILE: 'PROFILE', //----------------프로필
  MAP: 'MAP', //------------------------지도
  CAMERA: 'CAMERA', //------------------카메라
};

//라우팅
const routes = [
  {
    name: MENU_NAMES.MAIN,
    component: Screen.MainScreen,
    options: {
      title: '로그인',
      headerShown: true,
      animationEnabled: false,
    },
  },
];
export default routes;
