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

const Stack = createStackNavigator();
/**
 * @name Profile
 *
 */
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ddd</Text>;
    </SafeAreaView>
  );
};
export default ProfileScreen;
//Stack

export const ProfileStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Profile',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        component={ProfileScreen}
        options={{
          title: 'Profile',
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
