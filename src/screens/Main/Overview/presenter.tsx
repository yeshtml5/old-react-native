import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '@app/screens';
import { defaultHeaderStyle } from '@app/lib';
import { THEME_COLOR, STACK_SCREEN_OPTIONS, STACK_OPTIONS } from '@app/constpack';
import { MenuButton, SettingButton } from '@app/components';

type Props = {};

const Stack = createStackNavigator();

function Presenter({  }: Props) {
  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name="OVERVIEW"
        component={Screen.Overview}
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
