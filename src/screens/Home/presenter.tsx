/**
 *
 */
import React from 'react';
//navigation
import {createStackNavigator} from '@react-navigation/stack';
//components
import BottomTab from '@components/common/BottomTab';
//screens
import {HOME, Template1, Template2, Profile} from '@screens';
//icon
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

/**
 * @title dfdsfsd
 * @desc  HOME
 */
const Home = () => {
  return <BottomTab />;
};
export default Home;

/**
 *
 */
export const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF6347',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Template1}
        options={{
          title: 'Overview111',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#FF6347"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Home1"
        component={Template1}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#FF6347"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
