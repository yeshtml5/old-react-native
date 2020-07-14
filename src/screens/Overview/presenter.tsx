/**
 *
 */
import React from 'react';
import { Button, SafeAreaView, View, Text, StyleSheet } from 'react-native';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
//components
import BottomTab from '@components/common/BottomTab';
//context
import COLORS from 'contexts/color';
//screens
import { HomeScreen, Template1, Profile } from '@screens';
//icon
import Icon from 'react-native-vector-icons/Ionicons';
import { MENU_NAMES } from '@app/lib';
const Stack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */
const OverviewScreen = ({ navigation }, ...props) => {
  return (
    <SafeAreaView>
      <Text>Overview 페이지</Text>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        title="Home 으로 이동"
        color="#ff0000"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
export default OverviewScreen;

/**
 *
 */
export const OverviewStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Overview',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name={MENU_NAMES.OVERVIEW}
        navigation={navigation}
        component={OverviewScreen}
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
