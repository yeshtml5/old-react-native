import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

interface RouterProps {}

const Stack = createStackNavigator();

function Login() {
  return (
    <View>
      <Button />
      <Text>dddd</Text>
    </View>
  );
}

export const Routers: React.FC<RouterProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
