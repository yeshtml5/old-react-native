import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '@app/screens';
import { STACK_SCREEN_OPTIONS, STACK_OPTIONS, THEME_COLOR } from '@app/constpack';
import { MenuButton, SettingButton } from '@app/components';
import { MENU_NAMES } from '@app/lib';
type Props = {
  params?: {} | undefined;
};

function Presenter({ params }: Props) {
  // stack
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={MENU_NAMES.CODE}
        initialParams={{ ...params }}
        component={Screen.Code}
        options={{
          ...STACK_OPTIONS,
          headerLeft: () => <MenuButton />,
          headerRight: () => <SettingButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default Presenter;
