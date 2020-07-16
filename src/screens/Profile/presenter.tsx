/**
 *
 */
import React from 'react';
import { Button, View, Text, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
//screens
//style
//icon
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';

const Stack = createStackNavigator();
/**
 * @name Profile
 *
 */
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>프로필페이지</Text>
      <Button
        onPress={() => navigation.navigate(MENU_NAMES.HOME)}
        title="Home 으로 이동"
        color="#ff0000"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
export default ProfileScreen;
//Stack

export const ProfileStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '프로필',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name={MENU_NAMES.PROFILE}
        component={ProfileScreen}
        options={{
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
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#EEEEEE',
    //backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#111111',
    fontWeight: '400',
  },
});
