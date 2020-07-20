import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '@app/screens';
import { defaultHeaderStyle } from '@app/lib';
import { THEME_COLOR } from '@app/constpack';
import { MenuButton, SettingButton } from '@app/components';

type Props = {};

const Stack = createStackNavigator();

function Presenter({  }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...defaultHeaderStyle,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="내정보"
        component={Screen.Lab}
        options={{
          headerStyle: {
            backgroundColor: THEME_COLOR,
          },
          headerLeft: () => <MenuButton />,
          headerRight: () => <SettingButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default Presenter;
