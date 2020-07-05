/**
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from '@components/common/BottomTab';
import { Overview, LabScreen, Template1 } from '@screens/index';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */

const HomeScreen = () => {
  return <BottomTab />;
};
export default HomeScreen;

/**
 *
 */
export const HomeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'HOME',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="HomeScreen"
        navigation={navigation}
        component={Template1}
        options={{
          title: 'HOME',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#000000"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 100,
    borderBottomWidth: 0,
    borderBottomColor: '#111',
    backgroundColor: '#E1E1E1',
    //backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#111111',
    fontWeight: '400',
  },
});
