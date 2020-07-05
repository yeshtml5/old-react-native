/**
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
//components
import BottomTab from '@components/common/BottomTab';
//context
import COLORS from 'contexts/color';
//screens
import { Overview, Template1 } from '@screens/index';
//icon
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
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
export const HomeStackScreen = ({ navigation }) => {
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
      {/* <Stack.Screen
        name="Overview"
        component={Overview}
        options={{
          title: 'PREV',
        }}
      />
      <Stack.Screen
        name="Home1"
        component={Template1}
        options={{
          title: 'PREV',
        }}
      /> */}
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
