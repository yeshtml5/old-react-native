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
import { Home, Profile } from '@screens/index';
//icon
import Icon from 'react-native-vector-icons/Ionicons';
//import { Button } from 'react-native-paper';

const Stack = createStackNavigator();
const DetailsStack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */
const Overview = ({ navigation }, ...props) => {
  console.clear();
  console.log(props);
  return (
    <SafeAreaView>
      <Text>Overview</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Overview"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
export default Overview;

/**
 *
 */
export const OverviewStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'HOME',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="Home"
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
      <Stack.Screen
        name="Home1"
        component={Template1}
        options={{
          title: 'PREV',
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
